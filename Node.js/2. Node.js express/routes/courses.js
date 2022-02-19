const {
  Router
} = require('express')
const Courses = require('../models/courses')
const router = Router()

// get hardum uxarkelu hamara
router.get('/', async (req, res) => {
  // bazayich verdnum enq tvyalnery
  const courses = await Courses.getAll()

  // nor ej gnalu hamar
  // rendery vorpes erkrord parametr yndunuma obekt vori tvyalery karanq ogtagortenq hbs filerum
  res.render('courses', {
    title: "Courses",
    isCourses: true,
    courses

  })
})

router.get('/:id/edit', async (req, res) => {

  if (!req.query.allow) {
    return res.redirect('/')
  }

  const course = await Courses.getById(req.params.id)

  res.render('course-edit', {
    title: `Edit ${course.title}`,
    course
  })
})

router.post('/edit', async (req, res) => {
  await Courses.ubdate(req.body)
  res.redirect('/courses')
})

router.get('/:id', async (req, res) => {
  const course = await Courses.getById(req.params.id)
  res.render('course', {
    // arandin talis enq ira layouty vor menak ira hamar popoxutyunner anenq myusnerin chazdi karanq naev chtanq layout
    layout: 'empty',
    title: `Course ${course.title}`,
    course
  })
})

module.exports = router