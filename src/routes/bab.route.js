const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/bab.controller')
const {verifyToken} = require ('../middlewares/auth')

router.get("/:id",verifyToken, index)

module.exports = router