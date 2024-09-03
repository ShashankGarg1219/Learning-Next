const express = require('express');
const cors = require('cors')

const app = express()
app.use(express.json());

app.use(cors({
    origin:['http://localhost:3000'],
    methods:['POST','GET','DELETE','PUT'],
    credentials:true
}))


const cookieParser = require('cookie-parser');
app.use(cookieParser());


const TeacherLoginRouter = require('./Routes/teacher/teacherlogin')
app.use('/', TeacherLoginRouter)

const AllCoursesRouter = require('./Routes/allCourses/allcourses')
app.use('/', AllCoursesRouter)


const BatchRouter = require('./Routes/batch/batch')
app.use('/', BatchRouter)

app.listen(5002, ()=>{
    console.log(`Server is running on 5002`)
})