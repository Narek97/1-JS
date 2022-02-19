const {
    Schema,
    model,
} = require('mongoose')


const shema = new Schema({
        message:{
            type: String,
            required: true,
        },
        myId:{
            type: String,
            required: true,
        },
        id:{
            type: String,
            required: true,
        }
    
})

module.exports = model('message', shema)