
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const {user: userModel} = require("../models") 

const register = async (req, res, next) => {
    const { name, email, password } = req.body;
  
    const passwordHash = await bcrypt.hash(password, 10);
    await userModel.create({
      nama_user: name, 
      email,
      password: passwordHash,                         
    })
      .then((user) => {
        if (!user) {
          return res.status(500).send({
            message: "Failed to register user",
            data: null,
          });
        }
  
        return res.send({
          message: "User successfully registered",
          data: null,
        });
      })
      .catch((err) => {
        next(err);
      });
  };

const login = async ( req, res, next) => {
    const {email, password} = req.body
    console.log("Data", [email, password] ) 

    const user = await userModel.findOne({where: {email}})
    if (!user) {
        res.status(401).send({message: "Email is not registered"})
    }      

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid){
        res.status(401).send({message: "Invalid password"})        
    }

    const data = {
        id: user.id,
        email: user.email,
    }
    const token = jwt.sign(data, process.env.JWT_SECRET)

    return res.send({
        message: "Login Successfull",
        data: { 
            nama: user.nama_user,
            token
        }
    })
}

module.exports = {register, login}