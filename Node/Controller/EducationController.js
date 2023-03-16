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
    educationschema.find((err,data)=>{
        if(err){
            res.send(err)
            console.log(err)
        }
        else{
            res.send(data)
 //           console
            console.log(data)
        }
    })
}

module.exports = {addeducation,getEducation}