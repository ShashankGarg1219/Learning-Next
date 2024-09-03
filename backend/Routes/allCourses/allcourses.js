const express = require('express');
const AllCoursesRouter = express.Router();


const {All_course} = require ('../../Controller/allCourses/allcourses')


AllCoursesRouter.get('/view_allcourses',All_course)







module.exports = AllCoursesRouter; 