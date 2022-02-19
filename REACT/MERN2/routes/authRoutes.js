const { Router } = require('express');
const User = require('../models/User');
const config = require('config');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = Router();

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'некорректный емейл').isEmail(),
    check('password', 'минимальное длина пароля 6 символов').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'некорректные данные при регистрации',
        });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: 'емейл занят выберите другой' });
      }

      const hashPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashPassword });
      await user.save();
      res.status(201).json({ message: 'пользователь успешно создан' });
    } catch (e) {
      res.status(500).json({ message: 'что то пошло не так попробуйте снова' });
    }
  }
);

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'некорректный емейл').normalizeEmail().isEmail(),
    check('password', 'минимальное длина пароля 6 символов').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'некорректные данные при входе в систему',
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email: 'Narek@Gmail.com' });

      !user
        ? res.status(400).json({ message: 'неверный логин или пароль' })
        : '';
      const isMatch = await bcrypt.compare(password, user.password);
      !isMatch
        ? res.status(400).json({ message: 'неверный логин или пароль' })
        : '';

      const token = jwt.sign({ userID: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      });

      res.json({ token, userID: user.id });
    } catch (e) {
      res.status(500).json({ message: 'что то пошло не так попробуйте снова' });
    }
  }
);

module.exports = router;
