
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const {user: userModel} = require("../models") 

const login = async ( req, res, next) => {
    const {email, password} = req.body
    console.log("Data", [email, password] )

    const user = await userModel.findOne({where: {email}})
    if (!user) {
        res.status(401).send({message: "Invalid email"})
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
            token
        }
    })
}

module.exports = {login}