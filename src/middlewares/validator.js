
const { isEmail } = require("validator")

const validateLogin = (req, res, next) => {
    const { email, password } = req.body
  
    if (!email || !password) {
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
  
    next()
  };

  module.exports = {validateLogin}