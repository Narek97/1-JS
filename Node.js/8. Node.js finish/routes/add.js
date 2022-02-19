const {Router} = require('express')
const Course = require('../models/courses')
const auth = require('../middleware/auth')
// validachiayi hamar
const {
  validationResult
} = require('express-validator/check')
const {courseValidators} = require('../utils/validators')
const router = Router()

// get hardum uxarkelu hamara
// auth - stuguma ete login exat chi chi toxum vor et ej gnanq
router.get('/',auth, (req, res) => {
  // nor ej gnalu hamar
  // rendery vorpes erkrord parametr yndunuma obekt vori tvyalery karanq ogtagortenq hbs filerum
  res.render('add', {
      title: 'Add course',
      isAdd: true,   
  })
})

// post hardum uxarkelu hamar
router.post('/',auth,courseValidators, async (req, res) => {
  // validaciayo errorner beruma stex
  const errors = validationResult(req)
  // ete errors dashty datarka uremy sxal chka
  if(!errors.isEmpty()){
    return res.status(422).render('add',{
      title: 'Add course',
      isAdd: true,
      error:errors.array()[0].msg,
      // chisht grat dashtery validachiyich heto vor chkori u norich chgrenq
      data:{
        title: req.body.title,
        price: req.body.price,
        img: req.body.img,
      }
    })
  }
  
  
  //nor  coursi tvyalnery baza uxarkelu hamar
  const course = new Course({
    title: req.body.title,
    price: req.body.price,
    img: req.body.img,
    userId:req.user._id
  })

  try {
  // nor stextat cursy saxranit anel hamar qani der bazadannix chka
    await course.save()
  // nor curs stexteluch heto vor avtomat gna /courses ej
    res.redirect('/courses')
  } catch (e) {
    console.log(e)
  }
})

module.exports = router


