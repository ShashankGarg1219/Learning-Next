const connection = require('../../Modal/modal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




const userSignup=async (req,res)=>{
    const { teacher_id, teacher_name, email, password, qualification, status,gender, mobile_no}=req.body;
    const query="select * from teacher where email=$1";
    const query1="insert into teacher(teacher_id, teacher_name, email, password, qualification, status, gender, mobile_no) values($1, $2, $3, $4, $5, $6, $7, $8)";
    const salt=await bcrypt.genSalt(10);
    const pass=await bcrypt.hash(password,salt)
    connection.query(query,[email],(result,error)=>{
        if(result){
            return res.send({message:"user id already exist"})

        }
        connection.query(query1,[teacher_id, teacher_name, email, pass, qualification, status,gender, mobile_no],(result,err)=>{
            if(err){
                return res.send({Error: err.sqlMessage})
            }
            return res.send({status: 200,response: result})
        })
    })

}

////////////////////////////////////////////////////////////

const TeacherLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const sql = "SELECT * FROM teacher WHERE email=$1";
        const { rows: data } = await connection.query(sql, [email]);

        if (data.length > 0) {
            // Compare the password
            const user = data[0];
            const isMatch = await bcrypt.compare(password.toString(), user.password);

            if (isMatch) {
                const token = jwt.sign({
                    teacher_id: user.teacher_id,
                    teacher_name: user.teacher_name,
                    email: user.email,
                    qualification: user.qualification,
                    status: user.status,
                    gender: user.gender,
                    mobile_no: user.mobile_no
                }, "jwt-secret-key", { expiresIn: '1d' });

                res.cookie('token', token);
                return res.json({ Status: "success", token });
            } else {
                return res.status(400).json({ Error: "Password not matched" });
            }
        } else {
            return res.status(400).json({ Error: "No user ID exists" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ Error: "Login error in server" });
    }
};

  
  /////////////////////////////////////////////////////

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // Extract token from cookies

  if (!token) {
    return res.status(401).json({ Error: "You are not authenticated" });
  }

  try {
    // Verify token with the secret key
    jwt.verify(token, 'jwt_secret_key', (err, decoded) => {
      if (err) {
        return res.status(401).json({ Error: "Token is not valid" });
      } else {
        // Store decoded user info in the request object
        req.teacher_id = decoded.teacher_id;
        req.teacher_name = decoded.teacher_name;
        req.email = decoded.email;
        req.password = decoded.password;
        req.qualification = decoded.qualification;
        req.status = decoded.status;
        req.gender = decoded.gender;
        req.mobile_no = decoded.mobile_no;
        req.adhar = decoded.adhar;
        req.experience = decoded.experience;
        req.date_of_join = decoded.date_of_join;

        next(); // Proceed to the next middleware/route handler
      }
    });
  } catch (err) {
    console.error("Token verification failed", err);
    return res.status(500).json({ Error: "Internal server error" });
  }
};

// Handler to respond with user information if token is verified
const verifyUser = (req, res) => {
  // Construct user object from the request object
  const user = {
    teacher_id: req.teacher_id,
    teacher_name: req.teacher_name,
    email: req.email,
    qualification: req.qualification,
    status: req.status,
    gender: req.gender,
    mobile_no: req.mobile_no,
    adhar: req.adhar,
    experience: req.experience,
    date_of_join: req.date_of_join
  };

  // Respond with the user object
  return res.json({ Status: 'Success', user });
};

module.exports = { TeacherLogin, verifyToken, verifyUser,  userSignup };
