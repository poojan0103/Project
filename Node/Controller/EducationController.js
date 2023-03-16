const educationschema = require('../Model/EducationSchema');

const addeducation = (req,res)=>{
    var eduction = new educationschema(req.body)
    eduction.save((err,data)=>{
        if(err){
            res.send(err)
            console.log(err)
        }
        else{
            res.send(data)
            console.log(data)
        }
    })
}
const getEducation = (req,res)=>{
    educationschema.find().exec((err,data)=>{
        if(err){
            res.status(501).json({
                message: "error",
                Error: err
            })
        }
        else{
            res.status(200).json({
                message: "employee Fetched",
                data : data
        }
        )
        }
    })
}

module.exports = {addeducation,getEducation}