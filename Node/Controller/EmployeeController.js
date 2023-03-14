const employeeSchema = require('../Model/EmployeeSchema');

exports.addemployee = (req, res) => {
    var product = new employeeSchema(req.body);
    console.log(product);
    product.save((err, data) => {
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


exports.getEmployee = (req, res) => {
    employeeSchema.find().populate('department').exec((err, data) => {
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
exports.getbysalary = (req, res) => {
    const minSalary = 0;
    const maxSalary = 20000;
    employeeSchema.find({ salary: { $gte: minSalary, $lte: maxSalary }  }).populate('department').exec((err, data) => {
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
exports.getbysalarys = (req, res) => {
    const minSalary = 21000;
    const maxSalary = 30000;
    employeeSchema.find({ salary: { $gte: minSalary, $lte: maxSalary } }).populate('department').exec((err, data) => {
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

exports.getEmployeeByID = (req, res) => {
    const department = req.params.id;
    // console.log(typeof (department));
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