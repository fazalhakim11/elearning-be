const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/mata_pelajaran.controller')

router.get("/:id", index)

module.exports = router