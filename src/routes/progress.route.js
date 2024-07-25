const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/progress.controller')
// const {verifyToken} = require("../middlewares/auth")

router.post("/", index)

module.exports = router 