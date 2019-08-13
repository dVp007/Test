var mongoose = require('mongoose');                     // mongoose for mongodb
var database = require('../config/database');            // load the database config
module.exports = mongoose.connect(database.url,{useNewUrlParser:true},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected");
    }
});     // connect to mongoDB database on modulus.io