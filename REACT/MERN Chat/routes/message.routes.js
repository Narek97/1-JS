const router = require('express').Router()
const Mesage = require('../models/Message')

router.post('/userMessage',async (req,res)=>{
    try {

        let {myid,id}=req.body
        Mesage.find({
           
            $or: [
                { $and: [{myId:myid}, {id}] },
                { $and: [{myId:id}, {id:myid}] },

            ]
            
         
        }, function (err, results) {
            res.send(results)
        })
        
    } catch (error) {
        console.log('userMessage error')
        
    }
    
})

router.post('/addMessage', async(req,res)=>{
    try {
        const {myid,text} = req.body
        const msg = new Mesage({
            message:text.uText,
            myId:myid,
            id:text.id
        })
        await msg.save()


    } 
    catch (error) {
        console.log('addMessage error')
    }
   

})



module.exports = router
