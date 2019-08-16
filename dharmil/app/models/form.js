// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = formSchema = new mongoose.Schema({
    name:String,
    TOT:String,
    wordMark:String,
    class:String,
    typeOfRegistration:String,
    nameOfEntity:String,
    phoneNumber:Number,
    email:String,
});