const express = require("express")

const router = express.Router()

const {register, login, logout} = require ('../controllers/auth.controller')
const {validateRegister,validateLogin} = require('../middlewares/validator')
const { refreshToken } = require("../controllers/refreshToken.controller")

router.post("/register", validateRegister, register)  
router.post("/login", validateLogin,login)
router.get("/token", refreshToken)
router.delete("/logout", logout)

module.exports = router