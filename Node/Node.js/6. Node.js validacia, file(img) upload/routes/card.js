const {
    Router
} = require('express')
const auth = require('../middleware/auth')
const Course = require('../models/courses')
const router = Router()

function mapCartItems(cart) {
    return cart.items.map(c => ({
        ...c.courseId._doc,
        id:c.courseId.id,
        count: c.count
    }))
}

function computePrice(courses) {

    return courses.reduce((total, courses) => {
        return total += courses.price * courses.count
    }, 0)
}
// auth - stuguma ete login exat chi chi toxum vor et ej gnanq
router.get('/',auth, async (req, res) => {

    const user = await req.user.populate('cart.items.courseId').execPopulate()
    const courses = mapCartItems(user.cart)
    res.render('card', {
        title: 'Basket',
        isCard: true,
        courses,
        price: computePrice(courses)
    })

})

// coursy arnelu hamar
router.post('/add',auth, async (req, res) => {
    // gtnum enq ayn coursy vory uzum enq arnenq ira unikal id ov
    const course = await Course.findById(req.body.id)
    // gtat coursy bazayum avelachnelu hamar addToCart methody vory stextel enq model/user.js um
    await req.user.addToCart(course)
    res.redirect('/card')
})

router.delete('/remove/:id',auth, async (req, res) => {

    // req.params qani vor id-n verdnum enq hasceyich /remove/:id
    await req.user.removeFromCart(req.params.id)
    const user = await req.user.populate('cart.items.courseId').execPopulate()
    const courses = mapCartItems(user.cart)
    const cart = {
        courses,price:computePrice(courses)
    }
    res.status(200).json(cart)
})

module.exports = router