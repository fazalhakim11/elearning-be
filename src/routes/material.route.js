const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/material.cotroller')

router.get("/:id", index)

module.exports = router