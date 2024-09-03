const express = require('express');
const BatchRouter = express.Router();


const {Batch1} = require ('../../Controller/batch/batch')


BatchRouter.get('/view_batch',Batch1)







module.exports = BatchRouter; 