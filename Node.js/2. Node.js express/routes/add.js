const {
    Router
} = require('express')
const Course = require('../models/courses')
const router = Router()
// get hardum uxarkelu hamara
router.get('/', (req, res) => {
    // nor ej gnalu hamar
    // rendery vorpes erkrord parametr yndunuma obekt vori tvyalery karanq ogtagortenq hbs filerum
    res.render('add', {
        title: 'Add course',
        isAdd: true
    })
})


// post hardum uxarkelu hamar
router.post('/', async (req, res) => {
    
    const course = new Course(req.body.title, req.body.price, req.body.img)

    // nor stextat cursy saxranit anel hamar qani der bazadannix chka
    await course.save()

    // nor curs stexteluch heto vor avtomat gna /courses ej
    res.redirect('/courses')
})

module.exports = router