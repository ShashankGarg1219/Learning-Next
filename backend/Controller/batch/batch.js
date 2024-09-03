const connection = require('../../Modal/modal');

///////////////////////////GET////////////////////////////

const Batch1 = async (req, res) => {
    const selectQuery = 'SELECT * FROM batch';
    try {
        const result = await connection.query(selectQuery);
        res.send(result.rows);
    } catch (error) {
        console.log("Error", error.message);
        res.status(500).send("Database query error");
    }
};


module.exports = { Batch1 };