const express = require('express')
const cors = require('cors')
require('./config/connect')
const adminRoute = require('./routes/admin')
const clientRoute = require('./routes/client')
const employeeRoute = require('./routes/employee')
const departementRoute = require('./routes/departement')


const app=express()
app.use(express.json())
app.use(cors())

/********* Routes  */
app.use('/admin', adminRoute)
app.use('/client', clientRoute)
app.use('/employee', employeeRoute)
app.use('/departement', departementRoute)

app.use('/getimage', express.static('./uploads'))

app.listen(3000 , ()=> {
    console.log('server has started')
})