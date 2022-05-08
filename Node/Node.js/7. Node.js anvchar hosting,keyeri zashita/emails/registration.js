// emailin namak uxarkelu hamar
// to - vor emailin enq uxarkum, from - vor saytich, subject - inch anunov,html - inch namak uxarkenq
const keys = require('../keys')
module.exports = function(email){
    return{  
        to:email,
        from:keys.EMAIL_FROM,
        subject:'Account created',
        html:`
            <h1>Welcome to our store</h1>
            <p>You have successfully created an account in email - ${email}</p>
            <hr/>
            <a href='${keys.BASE_URL}'>Store courses</a>
            
        `          
    }
}