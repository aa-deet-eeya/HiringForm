const mongoose = require('mongoose')

const intervieweeSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId ,
    name : { type : String, required : true } ,
    email : { type : String, required : true , unique : true } ,
    position : { type: String, required : true } ,
    qualification : { type : String , required : true} ,
    Resume : {
        link : { type : String , required : true , unique : true} ,
        metaData : {
            fileName : { type : String, required : true } ,
            destination : { type : String , required : true} ,
            size : { type : Number }
        }
    }
})


module.exports = mongoose.model('interviewee' , intervieweeSchema  )