const express = require("express")
const router = express.Router();
const employeecontroller = require('../Controller/EmployeeController')
router.post('/add',employeecontroller.addemployee)
router.get('/get',employeecontroller.getEmployee);
router.get('/salary',employeecontroller.getbysalary)
module.exports =router