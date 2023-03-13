const express = require("express")
const router = express.Router();
const employeecontroller = require('../Controller/EmployeeController')
router.post('/add',employeecontroller.addEmployee)
router.get('/get',employeecontroller.getEmployee);
module.exports =router