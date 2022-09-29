const Client = require('../models/client')
const express = require('express')
const router = express.Router()

const multer = require('multer')

let filename = ''

const myStorage= multer.diskStorage({
    destination :'./uploads',
    filename : (req, file, redirect) => {
        let fl = Date.now() + '.' + file.mimetype.split('/')[1]
        redirect(null,fl)
        filename = fl
    }
})

const upload = multer({ storage : myStorage})

router.post('/ajout', upload.any('image '),(req,res)=> {
    let data =req.body
    let cl = new Client(data)
    cl.image = filename 

    cl.save()
        .then((response)=>{
            filename = ''
            res.send(response)
        })
        .catch((err)=>{
            res.send(err)
        })
})

router.get('/all', (req, res)=> {
    Client.find()
    .then((response)=>{
        res.send(response)
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.get('/getbyid/:id', (req,res)=> {
    let id= req.params.id
    Client.findById({ _id : id})
        .then((response)=>{
            res.send(response)
        })
        .catch((err)=>{
            res.send(err)
        })
})

router.delete('/delete/:id', (req,res)=> {
    let id= req.params.id
    Client.findByIdAndDelete({_id : id})
        .then((response)=>{
            res.send(response)
        })
        .catch((err)=>{
            res.send(err)
        })
})
router.put('/update/:id',upload.any('image'), (req,res)=> {
    let id = req.params.id
    let newData = req.body

    if (filename.length > 0){
        newData.image = filename
    }
    Client.findByIdAndUpdate({_id : id}, newData)
        .then((response)=>{
            filename='';
            res.send(response)
        })
        .catch((err)=>{
            res.send(err)
        })
})
module.exports = router