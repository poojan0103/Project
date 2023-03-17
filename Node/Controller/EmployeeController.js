const { json } = require('body-parser');
const employeeSchema = require('../Model/EmployeeSchema');

const addemployee = (req, res) => {
    var employee = new employeeSchema(req.body);
   
    employee.save((err, data) => {
        if (err) {
            res.status(501).json({
                message: "error",
            })
        } else {
            res.status(201).json({
                message: "employee added",
                data: data
            })

        }


    })
}


const getEmployee = (req, res) => {
    employeeSchema.find().populate('department').populate('education').exec((err, data) => {
        if (err) {
            res.status(501).json({
                message: "error",
                Error: err
            })

        }
        else {
            res.status(200).json({
                message: "employee Fetched",
                data: data
            })
        }
    })
}
const getbysalary = (req, res) => {
    let a = req.body;
    let query = {}

    if (a.minSalary !== '' && a.minSalary !== undefined && a.maxSalary !== '' && a.maxSalary !== undefined) {
        query['salary'] = { $gte: a.minSalary, $lte: a.maxSalary }
    }

    if (a.department !== '' && a.department !== undefined) {
        query['department'] = a.department
    }
    if (a.education !== '' && a.education !== undefined) {
        query['education'] = a.education
    }

    employeeSchema.find(query).populate('department').populate('education').exec((err, data) => {

        if (err) {
            console.log(err);
            res.status(501).json({
                message: "error",
                Error: err
            })

        }
        else {
            console.log(data);
            res.status(200).json({

                message: "employee Fetched",
                data: data

            })
        }
    })

}




const getEmployeeByID = (req, res) => {
    const department = req.params.id;
   
    employeeSchema.find({ department: department }).populate('department').exec((err, data) => {
        if (err) {
            res.status(501).json({

                message: "error",
                Error: err
            })

        }
        else {
            res.status(200).json({
                message: "employee Fetched",
                data: data
            })

        }
    })
}
module.exports = { addemployee, getEmployee, getEmployeeByID, getbysalary }