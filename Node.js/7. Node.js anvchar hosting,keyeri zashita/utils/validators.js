const {body} = require('express-validator/check')
const User = require('../models/user')

exports.registerValidators = [
    // server sxalneri namaky uxarkelu 2 dev ka kam withMessage ov kam vorpes 2rd paramet
    body('email')
    .isEmail().withMessage('Email is incorrect')
    // asinxron validaciayi he ashxatanq stugum enq nman emailov mard ka granchvat te che
    .custom(async (value,{req})=>{
        
        try {
            const user = await User.findOne({email:value})
            if(user){
                return Promise.reject('A user with that email already exists')
            }
        } catch (error) {
            console.log(error)
        }
    })
    .normalizeEmail(),

    body('password','Password must be at least 6 characters')
    .isLength({min:6,max:56})
    .isAlphanumeric()
    .trim(),

    body('confirm')
    .custom((value,{req})=>{
        if(value!==req.body.password){
            throw new Error('Passwords mismatch')
        }
        return true
    })
    .trim(),

    body('name')
    .isLength({min:2})
    .withMessage('Name must be at least 2 characters')
    .trim(),

]

exports.courseValidators = [
    body('title').isLength({min:3}).withMessage('Minimum name length 3 characters').trim(),
    body('price').isNumeric().withMessage('Enter the correct price'),
    body('img','Enter the correct Url of the picture').isURL()
   
]
