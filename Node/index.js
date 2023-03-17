const express =  require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const employeeRoutes = require("./Routes/EmployeeRoutes")
const depatmentRoutes = require("./Routes/DepartmentRoutes")
const eduroutes = require("./Routes/EducationRoutes")
const PORT = 9999
app.listen(PORT, () => {
  console.log('server is running on port', PORT)


});


app.use(cors())
app.use(express.json())
app.use('/emp',employeeRoutes)
app.use('/dep',depatmentRoutes)
app.use('/edu',eduroutes)
/
//connect with database
mongoose.connect('mongodb://127.0.0.1:27017/node', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to database'))
.catch(err => console.error('Error connecting to MongoDB', err));

