// stugum usery login exela te che
module.exports = function(req,res,next){
    // isAuth inch anun uzenq karanq tanq u veragrum enq tru kam false vor imananq login exata te che
    res.locals.isAuth = req.session.isAuthenticated
    
    res.locals.csrf = req.csrfToken()
    next()
}