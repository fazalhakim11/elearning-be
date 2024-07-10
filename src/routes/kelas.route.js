const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/kelas.cotroller')
const {verifyToken} = require("../middlewares/auth")

router.get("/",verifyToken, index)

module.exports = router