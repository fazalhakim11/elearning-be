const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/sub_bab.controller')
const {verifyToken} = require("../middlewares/auth")

router.get("/:id", verifyToken, index)

module.exports = router