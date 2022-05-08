const express = require('express')
// node.js ov html stextelu hamar vor karanq dinamik popoxutyunner aneq
const exphbs = require('express-handlebars')
const path = require('path')

// routnery miachnelu hamar
const homeRoutes = require('./routes/home')
const courseRoutes = require('./routes/courses')
const addRoutes = require('./routes/add')
const cardRoutes = require('./routes/card')
const app = express()

// handlebars nastroyka anelu hamar
const hbs = exphbs.create({
    // views papkum stextum  enq Layout papka u main.hbs faile vortex miavorum enq bolor myus failery 
    // partial papkan nra havara vor kisenq html-y maseri vor harmar lini ashxatel
    defaultLayout:'main',
    extname:'hbs'
})
app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
// erkrord views mer papki anuna vorte gtnvum en html filery eti kara inch anun ases lini
app.set('views','views')
// nshm enq te vortexich html failery verdne asenc css,nkarner ev ayln
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))

app.use('/',homeRoutes)
app.use('/add',addRoutes)
app.use('/courses',courseRoutes)
app.use('/card',cardRoutes)

// //espisi hardumnery index.js um chgrelu hamar stextum enq router papka mianum Routerin u endex enq anum
// app.get('/',(req,res)=>{
//     res.render('index',{
//         title:'Home',
//         isHome:true
//     })
// })

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})