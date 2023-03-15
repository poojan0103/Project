const express = require("express")
const router = express.Router();
const employeecontroller = require('../Controller/EmployeeController')
router.post('/add',employeecontroller.addemployee)
router.get('/get',employeecontroller.getEmployee);
router.post('/salary',employeecontroller.getbysalary)
// router.get('/salarys',employeecontroller.getbysalarys)
router.get('/getbyid/:id',employeecontroller.getEmployeeByID )
module.exports =router