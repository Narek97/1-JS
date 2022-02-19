const {
  Router
} = require('express')
const Course = require('../models/courses')
const auth = require('../middleware/auth')
const router = Router()

// stugel tvyal ov avelachrela coursy inqy karana popoxi
function isOwener(course, req) {
  return course.userId.toString() === req.user._id.toString()

}

// get hardum uxarkelu hamara
router.get('/', async (req, res) => {
  try {
    // <find bazayich verdnum enq tvyalnery>
    // ...................................
    // <populate ogtagortum enq vor ete mongoyi mi dashtum unenq myus dashti asenq useri id et dasty find aneluch
    // heto myus dashti tvyalnerne beri  orinak es depqum curseri dashtum ka useri id ov avelachrela et coursy 
    // u populate mijochov verdnum enq nayev user dashti et useri tvyalnery, 
    // erkrord parametrov verdnum enq en dashtery voronq mez petqa orinam email name >
    // ...................................
    // select i mijochov verdnum enq menak en dashter voronq mez petqa es kap chuni populate ekat tvyalneri het
    const courses = await Course.find().populate('userId', 'email name').select('img price title')

    // nor ej gnalu hamar
    // rendery vorpes erkrord parametr yndunuma obekt vori tvyalery karanq ogtagortenq hbs filerum
    res.render('courses', {
      title: 'Courses',
      isCourses: true,
      userId: req.user ? req.user._id.toString() : null,
      courses
    })
  } catch (error) {
    console.log(error)
  }

})

// tvyal coursy popoxelu hamar bachum enq nor ej
router.get('/:id/edit', auth, async (req, res) => {
  if (!req.query.allow) {
    return res.redirect('/')
  }

  try {

    const course = await Course.findById(req.params.id)
    if (!isOwener(course, req)) {
      return res.redirect('/courses')
    }

    res.render('course-edit', {
      title: `Edit ${course.title}`,
      course
    })

  } catch (error) {
    console.log(error)
  }

})

// coursy popoxeluch heto bazayum pahelu hamar
router.post('/edit', auth, async (req, res) => {
  try {
    const {id} = req.body
    delete req.body.id
    const course = await Course.findById(id)
    //  stugel tvyal ov avelachrela coursy inqy karana popoxi
    if (!isOwener(course,req)) {
      return res.redirect('/courses')
    }
    Object.assign(course,req.body)
    await course.save()
    res.redirect('/courses')
  } catch (error) {
    console.log(error)
  }

})

// course jnjely hamar
router.post('/remove', auth, async (req, res) => {
  try {
    await Course.deleteOne({
      _id: req.body.id,
      userId:req.user._id
    })
    res.redirect('/courses')

  } catch (error) {
    console.log(error)
  }

})

// arandin ejum tvyal coursy nayelu hamar
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
    res.render('course', {
      // arandin talis enq ira layouty vor menak ira hamar popoxutyunner anenq myusnerin chazdi karanq naev chtanq layout
      layout: 'empty',
      title: `Course ${course.title}`,
      course
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router