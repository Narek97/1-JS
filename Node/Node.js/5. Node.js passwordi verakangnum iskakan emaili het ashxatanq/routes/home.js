const {
    Router
} = require('express')
const router = Router()
// get hardum uxarkelu hamara
router.get('/', (req, res) => {
    // nor ej gnalu hamar
    // rendery vorpes erkrord parametr yndunuma obekt vori tvyalery karanq ogtagortenq hbs filerum
    res.render('index',{
        title:'Home',
        isHome:true
    })
})

module.exports = router