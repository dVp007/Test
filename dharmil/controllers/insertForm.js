var formSchema = require('../models/form');
const conn = require('../config/connection');
const dataB = conn.model('tests',conn.Schema(formSchema));



exports.insertForm = (req,res,next) => {
    console.log(req.body.addresses.length)
    let form = {};
    form['addresses'] = [];
    form['name'] = req.body.name;
    form['class'] = req.body.class;
    form['typeOfTrademark'] = req.body.typeOfTrademark;
    form['wordMark'] = req.body.wordMark;
    form['typeOfRegistration'] = req.body.typeOfRegistration;
    form['services'] = req.body.services;
    form['nameOfEntity'] = req.body.nameOfEntity;
    for(let i=0;i<req.body.addresses.length;i++){
        let add = {};
        add.city = req.body.addresses[i].city;
        add.state = req.body.addresses[i].state;
        add.pincode = parseInt(req.body.addresses[i].pincode);
        form.addresses.push(add);
    }
    form['phoneNumber'] = parseInt(req.body.phoneNumber);
    form['email'] = req.body.email;
    form['orderInfo'] = {
        status:'inProcess'
    }
    console.log(form);
    //form['pricing'] = parseInt(req.body.pricing);
    //form['payment'] = req.body.payment  
    dataB.insertMany(form,function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
    res.send("OK");
};