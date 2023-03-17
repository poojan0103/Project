const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    
    degree: {
        type: String,
        
    },
    
       
});

module.exports = mongoose.model("education",EducationSchema)