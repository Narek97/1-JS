const {
  Router
} = require('express')
const Course = require('../models/courses')
const auth = require('../middleware/auth')
const router = Router()

// get hardum uxarkelu hamara
router.get('/', async (req, res) => {
  // <find bazayich verdnum enq tvyalnery>
  // ...................................
  // <populate ogtagortum enq vor ete mongoyi mi dashtum unenq myus dashti asenq useri id et dasty find aneluch
  // heto myus dashti tvyalnerne beri  orinak es depqum curseri dashtum ka useri id ov avelachrela et coursy 
  // u populate mijochov verdnum enq nayev user dashti et useri tvyalnery, 
  // erkrord parametrov verdnum enq en dashtery voronq mez petqa orinam email name >
  // ...................................
  // select i mijochov verdnum enq menak en dashter voronq mez petqa es kap chuni populate ekat tvyalneri het
  const courses = await Course.find().populate('userId','email name').select('img price title')

  // nor ej gnalu hamar
  // rendery vorpes erkrord parametr yndunuma obekt vori tvyalery karanq ogtagortenq hbs filerum
  res.render('courses', {
    title: 'Courses',
    isCourses: true,
    courses
  })
})

// tvyal coursy popoxelu hamar bachum enq nor ej
router.get('/:id/edit',auth, async (req, res) => {
  if (!req.query.allow) {
    return res.redirect('/')
  }

  const course = await Course.findById(req.params.id)

  res.render('course-edit', {
    title: `Edit ${course.title}`,
    course
  })
})

// coursy popoxeluch heto bazayum pahelu hamar
router.post('/edit',auth, async (req, res) => {
  
  const {
    id
  } = req.body
  delete req.body.id
  await Course.findByIdAndUpdate(id, req.body)
  res.redirect('/courses')
})

// course jnjely hamar
router.post('/remove',auth, async (req, res) => {
  try {
    await Course.deleteOne({
      _id: req.body.id
    })
    res.redirect('/courses')

  } catch (error) {
    console.log(error)
  }

})


router.get('/:id', async (req, res) => {
  const course = await Course.findById(req.params.id)
  res.render('course', {
    // arandin talis enq ira layouty vor menak ira hamar popoxutyunner anenq myusnerin chazdi karanq naev chtanq layout
    layout: 'empty',
    title: `Course ${course.title}`,
    course
  })
})

module.exports = router