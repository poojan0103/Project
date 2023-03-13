const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const departmentSchema = Schema({

    name:{
        type:String,
        required:true

    }
    
})

module.exports = mongoose.model("department",departmentSchema)

