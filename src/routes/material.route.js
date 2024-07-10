const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/material.cotroller')
const {verifyToken} = require("../middlewares/auth")

router.get("/:id",verifyToken, index)

module.exports = router