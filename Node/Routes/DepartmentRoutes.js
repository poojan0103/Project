const express = require("express");
var router =express.Router();

const departmentController = require('../Controller/DepartmentController')
router.post('/add',departmentController.adddepartment)
 module.exports = router
