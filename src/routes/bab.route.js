const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/bab.controller')

router.get("/:id", index)

module.exports = router