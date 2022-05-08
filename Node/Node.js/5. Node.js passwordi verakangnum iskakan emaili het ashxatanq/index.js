const express = require('express')
// node.js ov html stextelu hamar vor karanq dinamik popoxutyunner aneq
const exphbs = require('express-handlebars')
// sesian mianalu hamar
const session = require('express-session')
// sessian u mongodb miavorelu hamar
const MongoStore = require('connect-mongodb-session')(session)
// papkaneri het ashxatelu hamar
const path = require('path')
// mongodb het ashxatelu hamar
const mongoose = require('mongoose')
// sessian pashtpanelu hamar vor chkaranan kotren
const csrf = require('csurf')
// logini kam nmanatip sxalnery cuych talu hamar
const flash = require('connect-flash')


// routnery miachnelu hamar
const homeRoutes = require('./routes/home')
const courseRoutes = require('./routes/courses')
const addRoutes = require('./routes/add')
const ordersRoutes = require('./routes/orders')
const cardRoutes = require('./routes/card')
const authRoutes = require('./routes/auth')
const varMiddleware = require('./middleware/variables')
const userMiddleware = require('./middleware/user')
// mongoyi kody
const keys = require('./keys/index')

const app = express()

// handlebars nastroyka anelu hamar
const hbs = exphbs.create({
    // views papkum stextum  enq Layout papka u main.hbs faile vortex miavorum enq bolor myus failery 
    // partial papkan nra havara vor kisenq html-y maseri vor harmar lini ashxatel
    defaultLayout: 'main',
    extname: 'hbs',
    // hbs um if === inchvorbani payman chenq kara stugen dra hamar ogtagortum enq es
    helpers: require('./utils/hbs-hepers')
})

// mongoyum sesiayv daht sarqely
const store = new MongoStore({
    // mongo.db um dashti anuny, cankachat anun karanq tanq
    collection:'Sessions',
    uri:keys.MONGODB_URL

})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
// erkrord views mer papki anuna vorte gtnvum en html filery eti kara inch anun ases lini
app.set('views', 'views')
// ............................

// nshum enq te vortexich html failery verdne asenq css,nkarner ev ayln
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
// ............................

// sesian nastroyka anelu hamar sesian nodum hishoxutyan tiruyta vortex karanq tarber tvyalner pahenq
app.use(session({
    secret:keys.SESION_SECRET,
    resave:false,
    saveUninitialized:false,
    // session mongo.db miavorman hamar
    store
}))
app.use(csrf())
app.use(flash())
app.use(varMiddleware)
app.use(userMiddleware)
// ............................

app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', courseRoutes)
app.use('/card', cardRoutes)
app.use('/orders', ordersRoutes)
app.use('/auth',authRoutes)

// //espisi hardumnery index.js um chgrelu hamar stextum enq router papka mianum Routerin u endex enq anum
// app.get('/',(req,res)=>{
//     res.render('index',{
//         title:'Home',
//         isHome:true
//     })
// })

const PORT = process.env.PORT || 3000

// mongodb miannalu hamar
async function start() {

    try {
        await mongoose.connect(keys.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
        })

        app.listen(PORT, () => {
            console.log(`Server is runing on port ${PORT}`)
        })

    } catch (e) {
        console.log(e)
    }

}
start()