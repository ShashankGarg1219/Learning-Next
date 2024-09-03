const express = require('express');
const TeacherLoginRouter = express.Router();


const {TeacherLogin, verifyToken, verifyUser, userSignup} = require ('../../Controller/teacher/teacherlogin')



TeacherLoginRouter.post('/teacherlogin',TeacherLogin)
TeacherLoginRouter.post('/teacherSignup', userSignup)
TeacherLoginRouter.get('/verifyToken',verifyToken,verifyUser)






module.exports = TeacherLoginRouter; 