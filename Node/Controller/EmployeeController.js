const employeeSchema = require('../Model/EmployeeSchema');

exports.addEmployee = async (req,res)=>{
   
    var employee = new employeeSchema(req.body);
    var result = await employee.save()
    
    if(result)
    {
        console.log(result);

    }else{
        res.status(400).send({message: 'Error adding employee'});
    }
}
exports.getEmployee = (req,res)=>{
    employeeSchema.find().populate('department').exec((err,data)=>{
        if(err){
            res.status(501).json({
                message: "error",
                Error:err
            })

        }
        else{
            res.status(200).json({
                message : "employee Fetched",
                data:data
            })
        }
    })
}