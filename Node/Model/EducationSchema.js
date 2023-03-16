const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    // employee: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'employees'
    // },
    
    degree: {
        type: String,
        
    },
    
       
});

module.exports = mongoose.model("education",EducationSchema)