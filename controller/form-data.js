const intervieweeModel = require('../model/interviewee')
const mongoose = require('mongoose')

exports.post_form_data = (req, res, next )=>{
    
    const interviewee = new intervieweeModel({
        _id : new mongoose.Types.ObjectId() ,
        name : req.body.user.name ,
        email : req.body.user.email ,
        position : req.body.user.position ,
        qualification : req.body.user.qualification ,
        Resume : {
            link : req.body.user.resume ,
            metaData : {
                fileName : req.file.originalname ,
                destination : req.file.path ,
                size : req.file.size
            }
        }
    })
    
    interviewee
        .save()
        .then(result=>{
            console.log(result)
            res.status(201).json({
                success : true ,
                message : "Interviewee Data successfully saved" ,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                success : false ,
                message : "Server Error" ,
                error
            })
        })
    
    //console.log(interviewee)
    //res.status(200).json({
    //   body : req.body ,
    //   file : req.file ,
    //   interviewee
    //})
} 

