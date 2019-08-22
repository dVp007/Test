'use strict';
const formSchema = {
    name: {
        type:String,
        //match:'^[A-Za-z]$'
    }, 
    // logoUri: {
    //     type:String
    // },
    typeOfTrademark: {
        type:String
    },
    wordMark: String,
    class: [{
        type:String
    }],
    typeOfRegistration: {
        type:String
    },
    services: {
        type:String
    },
    nameOfEntity: {
        type:String
    },
    // //documents:[{

    // //}],
    addresses: [{
        city:{
            type:String
        },
        state:{
            type:String
        },
        pincode:{
            type:Number,
            min:[6],
            //required:[true]
        }
    }],
    phoneNumber:{
        type:Number,
        min:[10],
        //required:[true]
    },
    email: {
        type:String,
    },
    // pricing: {
    //     type:Number,
    // },
    // payment: {
    //     type:String,
    // },
    orderInfo:[{
        status:{
            type:String
        }
    }], 
};
module.exports = formSchema;