const express = require('express');
const router = express.Router()
const educationcontroller = require('../Controller/EducationController')
router.post('/add',educationcontroller.addeducation)
router.get('/get',educationcontroller.getEducation)
module.exports = router