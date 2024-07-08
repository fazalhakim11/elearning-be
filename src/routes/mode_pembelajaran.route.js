const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/mode_pembelajaran.controller')

router.get("/:id", index)

module.exports = router