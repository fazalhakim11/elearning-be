
const { isEmail, isStrongPassword } = require("validator")
const {user: userModel} = require("../models")

const validateRegister = async (req, res, next) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.send({
        message: "Bad request",
        data: null,
      });
    }
  
    if (!isEmail(email)) {
      return res.send({
        message: "Invalid email",
        data: null,
      });
    }
  
    if (
      !isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return res.send({
        message: "Password is too weak",
        data: null,
      });
    }
  
    const emailCheck = await userModel.findOne({
      where: { email },
    });
    if (emailCheck) {
      return res.status(400).send({
        message: "Email already registered",
        data: null,
      });
    }
  
    next();
  }

const validateLogin = (req, res, next) => {
    const { email, password } = req.body
  
    if (!email || !password) {
      return res.status(401).send({
        message: "Bad request",
        data: null,
      });
    }
  
    if (!isEmail(email)) {
      return res.status(401).send({
        message: "Invalid email",
        data: null,
      }); 
    }
  
    next()
  };

  module.exports = {validateRegister, validateLogin}