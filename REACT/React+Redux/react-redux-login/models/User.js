const {
    Schema,
    model,
    Types
} = require('mongoose')

const shema = new Schema({
    name:{
        type: String,
        require: true,
    },
    surname:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
})

module.exports = model('User', shema)