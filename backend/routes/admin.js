const Admin = require('../models/admin')
const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/register', (req,res)=> {

    let data =req.body
    let admin = new Admin(data)

    let salt = bcrypt.genSaltSync(10)
    let cryptedPWD = bcrypt.hashSync( data.password , salt )

    admin.password = cryptedPWD
    admin.save()
        .then((response)=>{
            res.status(200).send(response)
        })
        .catch((err)=>{
            res.status(400).send(err)
        })

})

router.post('/login', (req, res)=> {
    let data = req.body
    Admin.findOne({ email : data.email})
        .then((admin) => {
            let valid = bcrypt.compareSync( data.password , admin.password)
            if (valid === false ) {
                res.status(401).send('email or password invalid')
            }else {

                let payload = {
                    fullname: admin.fullname,
                    email : admin.email,
                    _id: admin._id 
                }

                let token = jwt.sign(payload, '123456789')
                res.status(200).send({myToken : token})
            }
        })
        .catch((err)=> {
            res.status(400).send(err)
        })
})

router.put('/update/:id', (req,res)=> {
    
})

module.exports = router