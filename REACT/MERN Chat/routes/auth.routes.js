const router = require('express').Router();
const bcrypt = require("bcryptjs")
const config = require('config')
const jwt = require('jsonwebtoken')
const {
    check,
    validationResult
} = require('express-validator')
const User = require('../models/User')



router.post('/registr',

    [
        // validachia
        check("email", "Email erroe").normalizeEmail().isEmail(),
        check("password", "min lenght 6").isLength({
            min: 6
        })
    ],
    async (req, res) => {

        try {      
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "error registration"
                })
            }

            const {
                email,
                password
            } = req.body

            const candidate = await User.findOne({
                email
            })
            candidate ? res.status(400).json({
                message: "Email zanet"
            }) : ""
            // paroli hashavorum
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({
                email,
                password: hashedPassword
            })

            await user.save()
            res.status(201).json({
                message: "Registration ok"
            })

        } catch (e) {
            res.status(500).json({
                message: "Error try again"
            })
        }
    })

router.post('/login',
    [
        // validachia
        check("email", "Email erroe").normalizeEmail().isEmail(),
        check("password", "vedite parol").exists()

    ],
    async (req, res) => {
        
        try {
          
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "error login"
                })
            }

            const {email,password} = req.body
            console.log(email,password)
            const user = await User.findOne({email})
            !user?res.status(400).json({message:"polzavatel ne nayden"}):''
            const isMatch = await bcrypt.compare(password,user.password)
            !isMatch?res.status(400).json({message:"neverni parol"}):''
            // tokeni tramadrum
            const token = jwt.sign(
                {userId:user.id},
                config.get('jwtSecret'),
                {expiresIn:"1h"}
            )
            res.json({token,userId:user.id,email:user.email})
        
        
        } catch (e) {
            res.status(500).json({
                message: "Error try again"
            })
        }

    })

    router.get('/users',async (req,res)=>{
    
        try {
            
            const user =  await User.find({})
            res.json({user})

        } 
        catch (error) {
            console.log('users error')
        } 
    })

module.exports = router