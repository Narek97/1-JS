const express = require("express")
const config = require("config")
const mongoose = require('mongoose')
const app = express()


app.use(express.json({ extended: true }))
app.use("/api/auth",require('./routes/auth.routs'))


const PORT = config.get('port') || 5000

async function start(){
    try {
        await mongoose.connect(config.get('mongoUri'),{
            seNewUrlParser: true,
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })
        app.listen(PORT,()=>console.log(`app has been started on port ${PORT}`))
        
    } catch (e) {
        console.log('server err',e.message)
        process.exit(1)
    }
}

start()


