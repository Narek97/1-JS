// filer nerbernelu hamar
const multer = require('multer')
// vortex ev incpes nerbernel filery
var storage = multer.diskStorage({  
    destination: function(req, file, callback) {  
    callback(null, "images");  
},  
    filename: function(req, file, callback) {  
    callback(null, Date.now() + "_" + file.originalname);  
}  
});

// stugel nebernat fily iroq nkara te voch
const allowedTypes = ['image/png','image/jpg','image/jpeg',]

const fileFilter = (req, file, cb) => {
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

module.exports = multer({
    storage,
    // fileFilter,
})