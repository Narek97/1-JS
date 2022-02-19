const express = require("express")
const config = require("config")
const mongoose = require('mongoose')
const app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.json({ extended: true }))
app.use("/api/auth",require("./routes/auth.routes"))
app.use("/api/message",require("./routes/message.routes"))

const PORT = config.get('port')||5000

async function start(){
    try{  
       await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })

        io.on('connection', function(socket){
            socket.on('getMessages',async function (data) {    
              
              io.sockets.emit('serverMessages', data)  
            });
            console.log('socket started');
        });

        http.listen(PORT,()=>console.log(`App has been started ${PORT}...`))
    }
    catch(e){
        console.log('Server error',e.message)
        process.exit(1)
    }
}

start()




