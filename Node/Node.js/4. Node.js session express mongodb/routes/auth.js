const {
    Router
} = require('express')
// paroli hashavorelu hamar
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const router = Router()

router.get('/login', async (req, res) => {
    res.render('auth/login', {
        title: 'Authorization',
        isLogin: true,
        // errornery hbs tanelu u chuych talu hamar
        registrError:req.flash('registrError'),
        loginError:req.flash('loginError')

    })
})

router.get('/logout', async (req, res) => {
    // req.session.destroy sesian jnjelu hamar
    req.session.destroy(() => {
        res.redirect('/auth/login#login')
    })

})

router.post('/login', async (req, res) => {
    try {
      const {email, password} = req.body
        // stugum enq nman emailov mard ka granchvat
      const candidate = await User.findOne({ email })
  
      if (candidate) {
        //  apahashovorum enq paroly u stugum tesnenq nuyna te voch
        const areSame = await bcrypt.compare(password,candidate.password)
        if (areSame) {
          req.session.user = candidate
          req.session.isAuthenticated = true
          req.session.save(err => {
            if (err) {
              throw err
            }
            res.redirect('/')
          })
        } else {
          req.flash('loginError','Incorrect password') 
          res.redirect('/auth/login#login')
        }
      } else {
        req.flash('loginError','Such user does not exist') 
        res.redirect('/auth/login#login')
      }
    } catch (e) {
      console.log(e)
    }
  })



router.post('/register', async (req, res) => {

    try {
        const {
            email,
            password,
            repeat,
            name
        } = req.body
        const candidate = await User.findOne({
            email
        })
        if (candidate) {
           //errornery cuych talu hamar 
            req.flash('registrError','A user with that email already exists')
            res.redirect('/auth/login#registr')
        } else {
            // paroli hashavorum,10 - vor 10 simvolanoch hashavorum
            const hashPassword = await bcrypt.hash(password, 10)
            const user = new User({
              email, name, password: hashPassword, cart: {items: []}
            })
            await user.save()
            res.redirect('/auth/login#login')
        }

    } catch (error) {
        console.log(error)
    }
})

module.exports = router