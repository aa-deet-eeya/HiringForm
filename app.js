const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')

require('dotenv').config()


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true ,
    useUnifiedTopology : true
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(express.static('views'))



const route = require('./routes')
app.use('/submit', route )


app.use((error, req, res, next)=>{
    res.status(error.status || 500) 
    res.json({
        errorMessage : error.message ,
        error
    })
})

module.exports = app