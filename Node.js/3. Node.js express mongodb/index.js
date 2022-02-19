const express = require('express')
// node.js ov html stextelu hamar vor karanq dinamik popoxutyunner aneq
const exphbs = require('express-handlebars')
const path = require('path')
// mongodb het ashxatelu hamar
const mongoose = require('mongoose')

// routnery miachnelu hamar
const homeRoutes = require('./routes/home')
const courseRoutes = require('./routes/courses')
const addRoutes = require('./routes/add')
const ordersRoutes = require('./routes/orders')
const cardRoutes = require('./routes/card')
const User = require('./models/user')

const app = express()

// handlebars nastroyka anelu hamar
const hbs = exphbs.create({
    // views papkum stextum  enq Layout papka u main.hbs faile vortex miavorum enq bolor myus failery 
    // partial papkan nra havara vor kisenq html-y maseri vor harmar lini ashxatel
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
// erkrord views mer papki anuna vorte gtnvum en html filery eti kara inch anun ases lini
app.set('views', 'views')


// es funkciayi mijochov bolo post,get hardumneri mej unenq req.user dasht vortex ka useri tvyalnery
app.use(async (req,res,next)=>{
    
    try {
        const user = await User.findById('5e81bde69c59aa05b424c5d0')
        req.user = user
        // next nshanakuma ete es funkchian chkanchenq myu nerqevi funkcianery chen ashxati
        next()
    } catch (error) {
        console.log(error)
    }
})

// nshum enq te vortexich html failery verdne asenq css,nkarner ev ayln
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))

app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', courseRoutes)
app.use('/card', cardRoutes)
app.use('/orders', ordersRoutes)

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
        const url = `mongodb+srv://Narek:mongodbpassword@cluster0-hklvj.mongodb.net/shop`
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
        })

        // arhestakan stextum enq granchvat user
        const candidate = await User.findOne()
        if(!candidate){
            const user = new User({
                email:'Narek@mail.ru',
                name:'Narek',
                cart:{items:[]}
            })

            await user.save()
        }


        app.listen(PORT, () => {
            console.log(`Server is runing on port ${PORT}`)
        })

    } catch (e) {
        console.log(e)
    }

}

start()