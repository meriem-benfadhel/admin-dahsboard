const mongoose = require('mongoose')
const objectId = require('mongodb').ObjectId

const Employee = mongoose.model('Employee', {
    fullname : String, 
    image : String,
    tel :  String,
    email : String, 
    address : String, 
    idDep : objectId

})

module.exports = Employee