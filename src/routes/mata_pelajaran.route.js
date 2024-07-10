const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/mata_pelajaran.controller')
const {verifyToken} = require ('../middlewares/auth')

router.get("/:id",verifyToken, index)

module.exports = router