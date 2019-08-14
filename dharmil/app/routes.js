var mongoose = require('mongoose');
var multer   = require('multer');             // for image upload
const upload = multer({
    dest:'uploads/'
});
var db = require('../config/config.js');
// load the todo model
var Todo = require('./models/todo');
// expose the routes to our app with module.exports
module.exports = function(app) {
    // application -------------------------------------------------------------
    
    app.get('*', function(req, res) {
        res.sendfile('./public/Hello.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.post('/upload',upload.single('file'),function(req,res){
        console.log(req.body);
        res.send('OK')
    })

    app.post('/add',function(req,res){
        console.log(req.body);
        let formSchema = new mongoose.Schema({
            name:String,
            TOT:String,
            wordMark:String,
            class:String,
            typeOfRegistration:String,
            nameOfEntity:String,
            phoneNumber:Number,
            email:String,
        });

        var db = mongoose.model('Test',formSchema);

        db.insertMany(req.body.translex,function(err,data){
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        });
        res.send("OK")
    });
}