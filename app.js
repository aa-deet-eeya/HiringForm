const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true ,
    useUnifiedTopology : true
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use(express.static('views'))


app.use((error, req, res, next)=>{
    res.status(err.status || 500) 
    res.json({
        errorMessage : error.message ,
        error
    })
})

module.exports = app