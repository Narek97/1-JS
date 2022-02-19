const keys = require('../keys')

module.exports = function(email,token){
    return{  
        to:email,
        from:keys.EMAIL_FROM,
        subject:'Password recovery',
        html:`
            <h1>Restore password?</h1>
            <p>If it’s not you, then ignore the letter</p>
            <p>If you click on the link</p>  
            <p><a href='${keys.BASE_URL}/auth/password/${token}'>Forget password</a></p>
            <hr/>
            <a href='${keys.BASE_URL}'>Store courses</a>
            
        `          
    }
}