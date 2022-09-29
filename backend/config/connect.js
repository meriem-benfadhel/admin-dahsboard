const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://meriem:1234@cluster0.diootkl.mongodb.net/dashboard?retryWrites=true&w=majority")
    .then(()=> {
        console.log("succefully connected to db !")
    })
    .catch(()=> {
        console.log("failed to connect to db ! ")
    })

module.exports = mongoose