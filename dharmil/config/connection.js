var mongoose = require('mongoose');                     // mongoose for mongodb
var url = 'mongodb://localhost:27017/mydatabase';            // load the database config
mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected");
    }
});     // connect to mongoDB database on modulus.io
module.exports = mongoose;