'use strict';
// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = formSchema = new mongoose.Schema({
    name: {
        type:string
    },
    logoUri: {
        type:string
    },
    typeOfTrademark: {
        type:string
    },
    wordMark: {
        type:string
    },
    class: {
        type:string
    },
    typeOfRegistration: {
        type:string
    },
    services: {
        type:string
    },
    nameOfEntity: {
        type:string
    },
    //documents:[{

    //}],
    address: [{
        city:{
            type:string
        },
        state:{
            type:string
        },
        pincode:{
            type:string
        }
    }],
    phoneNumber:{
        type:number,
    },
    email: {
        type:string,
    },
    pricing: {
        type:number,
    },
    payment: {
        type:string,
    },
    //order_info:[{
        
    //}], 
});