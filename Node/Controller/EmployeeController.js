const employeeSchema = require('../Model/EmployeeSchema');

const addemployee = (req, res) => {
    var employee = new employeeSchema(req.body);
    console.log(employee);
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
    console.log(a);
    if((a.minSalary === '' || a.minSalary === undefined) && (a.department === undefined || a.department === '') && (a.education === '' || a.education === undefined))
    {
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
    else if (a.minSalary === ''&& a.education === ''|| a.education === undefined) {
        employeeSchema.find({ department: a.department }).populate('department').populate('education').exec((err, data) => {
            if (err) {
                res.status(501).json({
                    message: "error",
                    Error: err
                })
            }
            else {
                res.status(201).json({
                    message: "employee fetched",
                    data: data
                })
            }
        })
    }
    // else if(a.department === '' || a.department === undefined && a.minSalary === ''){
    //     employeeSchema.find({ education : a.education}).populate('department').populate('education').exec((err, data) => {
    //         if (err) {
    //             res.status(501).json({
    //                 message: "error",
    //                 Error: err
    //             })
    //         }
    //         else {
    //             res.status(201).json({
    //                 message: "employee fetched",
    //                 data: data
    //             })
    //         }
    //     })
    // }
    // else if ((a.department === '' || a.department === undefined) ) {
    //     employeeSchema.find({ salary: { $gte: a.minSalary, $lte: a.maxSalary } }).populate('department').populate('education').exec((err, data) => {
    //         if (err) {
    //             res.status(501).json({
    //                 message: "error",
    //                 Error: err
    //             })
    //         }
    //         else {
    //             res.status(201).json({
    //                 message: "employee fetched",
    //                 data: data
    //             }) 
    //         }
    //     })
    // }
   // salary: { $gte: a.minSalary, $lte: a.maxSalary }, department: a.department
//    const query = {};
//    query['salary'] = {}
    else {
        employeeSchema.find({
            department: a.department, salary: {$gte: a.minSalary, $lte: a. maxSalary}
        }).populate('department').populate('education').exec((err, data) => {
            if (err) {
                res.status(501).json({
                    message: "error",
                    Error: err
                })
            }
            else {
                res.status(201).json({
                    message: "employee fetched",
                    data: data
                })
            }
        })
    }

    // else{
    //         employeeSchema.find({ salary: { $gte: a.minSalary, $lte: a.maxSalary } }).populate({path:'department', match:{department:a.department}}).exec((err, data) => {
    //     if (err) {
    //         res.status(501).json({
    //             message: "error",
    //             Error: err
    //         })

    //     }
    //     else {
    //         res.status(200).json({
    //             message: "employee Fetched",
    //             data: data
    //         })

    //     }
    // })
}




// const getbysalary =  (req, res) => {
// console.log(req.body);


// const minSalary = 0;
// const maxSalary = 20000;
// employeeSchema.find({ salary: { $gte: minSalary, $lte: maxSalary }  }).populate('department').exec((err, data) => {
//     if (err) {
//         res.status(501).json({
//             message: "error",
//             Error: err
//         })

//     }
//     else {
//         res.status(200).json({
//             message: "employee Fetched",
//             data: data
//         })

//     }
// })
// }
// const getbysalarys = (req, res) => {
//     const minSalary = 21000;
//     const maxSalary = 30000;
//     employeeSchema.find({ salary: { $gte: minSalary, $lte: maxSalary } }).populate({path:'department', match:{department:"Marketing"}}).exec((err, data) => {
//         if (err) {
//             res.status(501).json({
//                 message: "error",
//                 Error: err
//             })

//         }
//         else {
//             res.status(200).json({
//                 message: "employee Fetched",
//                 data: data
//             })

//         }
//     })
// }

const getEmployeeByID = (req, res) => {
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
module.exports = { addemployee, getEmployee, getEmployeeByID, getbysalary }