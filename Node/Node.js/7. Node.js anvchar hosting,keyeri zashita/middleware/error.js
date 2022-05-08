// ete usery silkum gri nench hasche vor chka gna mer stextat ejy 
module.exports = function(req, res, next){
    res.status(404).render('404',{
        title:'Page not found'
    })
}

