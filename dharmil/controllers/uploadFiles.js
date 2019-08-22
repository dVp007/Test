var multer   = require('multer');             // for image upload

// storage paths given for files 
const maxSize = 1*1000*1000;
const store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'.'+file.originalname)
    }
});

// File validations
var upload = multer({
    storage: store,
    limits: { fileSize: maxSize },
    }).single('file');

exports.uploadFiles = (req,res,next) => {
    upload(req,res,function(err){
        console.log(err);
        res.send('ok')
    })
};