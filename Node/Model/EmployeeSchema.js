const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const employeeschema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
        
    },
    department :{
        type: Schema.Types.ObjectId,
        ref:'department'
    }


})
module.exports = mongoose.model("employees",employeeschema)