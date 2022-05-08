// hbs -um if iv payman stugelu hamar hbs y zavaskoy if payman chuni

module.exports = {
    ifeq(a,b,options){
       
        if(a==b){
            return options.fn(this)
        }
        return options.inverse(this)
    }
}