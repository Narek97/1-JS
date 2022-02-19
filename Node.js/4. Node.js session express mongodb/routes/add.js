const {Router} = require('express')
const Course = require('../models/courses')
const auth = require('../middleware/auth')
const router = Router()

// get hardum uxarkelu hamara
// auth - stuguma ete login exat chi chi toxum vor et ej gnanq
router.get('/',auth, (req, res) => {
  // nor ej gnalu hamar
  // rendery vorpes erkrord parametr yndunuma obekt vori tvyalery karanq ogtagortenq hbs filerum
  res.render('add', {
      title: 'Add course',
      isAdd: true
  })
})

// post hardum uxarkelu hamar
router.post('/',auth, async (req, res) => {
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


