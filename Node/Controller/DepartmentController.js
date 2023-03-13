const departmentSchema = require('../Model/DepartmentSchema')

exports.adddepartment = (req,res)=>{
    var department = new departmentSchema(req.body);
    department.save((err,data)=>{

        if(err){
            res.status(501).json({
                message: "error",
            })

        }
        else{
            res.status(200).json({
                message : "department added",
                data:data
            })
        }
    })
}