const connection = require('../../Modal/modal');

///////////////////////////GET////////////////////////////

const All_course = async (req, res) => {
    const selectQuery = 'SELECT * FROM courses';
    try {
        const result = await connection.query(selectQuery);
        res.send(result.rows);
    } catch (error) {
        console.log("Error", error.message);
        res.status(500).send("Database query error");
    }
};

//////////////////////////////////////////////////
  
  

  




module.exports = { All_course};