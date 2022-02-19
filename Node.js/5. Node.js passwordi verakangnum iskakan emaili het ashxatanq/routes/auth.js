const {
  Router
} = require('express')
// paroli hashavorelu hamar
const bcrypt = require('bcryptjs')
// iskakan emaili he ashxatelu hamar
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')
// ...................................
// sendgridi api key stanalu hamar
const keys = require('../keys')
// emailin namak uxarkelu shablony
const regemail = require('../emails/registration')
const User = require('../models/user')
// paroli verakangnman hamar
const resetEmail = require('../emails/reset')
// generachnuma patahakan token
const crypto = require('crypto')
// ..............................

const router = Router()

// sendgridin  mianalu hamar
const transparter = nodemailer.createTransport(sendgrid({
  auth: {
    api_key: keys.SENDGRID_API_KEY
  }
}))


router.get('/login', async (req, res) => {
  res.render('auth/login', {
    title: 'Authorization',
    isLogin: true,
    // errornery hbs tanelu u chuych talu hamar
    registrError: req.flash('registrError'),
    loginError: req.flash('loginError')

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
    const {
      email,
      password
    } = req.body
    // stugum enq nman emailov mard ka granchvat
    const candidate = await User.findOne({
      email
    })

    if (candidate) {
      //  apahashovorum enq paroly u stugum tesnenq nuyna te voch
      const areSame = await bcrypt.compare(password, candidate.password)
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
        req.flash('loginError', 'Incorrect password')
        res.redirect('/auth/login#login')
      }
    } else {
      req.flash('loginError', 'Such user does not exist')
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
      req.flash('registrError', 'A user with that email already exists')
      res.redirect('/auth/login#registr')
    } else {
      // paroli hashavorum,10 - vor 10 simvolanoch hashavorum
      const hashPassword = await bcrypt.hash(password, 10)
      const user = new User({
        email,
        name,
        password: hashPassword,
        cart: {
          items: []
        }
      })
      await user.save()
      res.redirect('/auth/login#login')
      // sendgridov emailin namak uxarkelu hamar
      await transparter.sendMail(regemail(email))
    }


  } catch (error) {
    console.log(error)
  }
})

// morachat paroli verakangnum
router.get('/reset', (req, res) => {
  res.render('auth/reset', {
    title: 'Forgot password?',
    error: req.flash('error')

  })
})


router.post('/reset', (req, res) => {
  try {
    // generachnum enq patahakan token 32 simvolanoch
    crypto.randomBytes(32, async (err, bufer) => {
      if (err) {
        req.flash('error', 'Something went wrong try later')
        return res.redirect('/auth/reset')
      }
      // generachvat tokeni stachum
      const token = bufer.toString('hex')
      // stugum enq tench emailov mard ka bazayum
      const candiate = await User.findOne({
        email: req.body.email
      })
      if (candiate) {
        candiate.resetToken = token
        candiate.resetTokenExp = Date.now() + 60 * 60 * 1000
        await candiate.save()
        await transparter.sendMail(resetEmail(candiate.email, token))
        res.redirect('/auth/login')
      } else {
        req.flash('error', 'Invalid email')
        res.redirect('/auth/reset')
      }
    })
  } catch (error) {
    console.log(error)
  }
})


// morachat paroli verakangnum emailov hastateluch heto
router.get('/password/:token', async (req, res) => {

  if (!req.params.token) {
    return res.redirect('/auth/login')
  }


  try {
   
    const user = await User.findOne({
      resetToken: req.params.token,
      resetTokenExp: {$gt: Date.now()}
    })
    if(!user){
      return res.redirect('/auth/login')
    }
    else{
      res.render('auth/Forgetpassword', {
        title: 'Forgot password',
        error: req.flash('error'),
        userId: user._id.toString(),
        token: req.params.token
      })
    }
   

  } catch (error) {
    console.log(error)
  }


})

router.post('/password',async(req,res)=>{
  try {

    const user = await User.findOne({
      _id:req.body.userId,
      resetToken:req.body.token,
      resetTokenExp:{$gt:Date.now()}
    })
    if(user){
      user.password = await bcrypt.hash(req.body.password,10)
      user.resetToken = undefined
      user.resetTokenExp = undefined
      await user.save()
      res.redirect('/auth/login')
    }
    else{
      req.flash('loginError','Time is up try again')
      req.redirect('/auth/login')
    }
    
  } catch (error) {
    console.log(error)
  }
})


module.exports = router