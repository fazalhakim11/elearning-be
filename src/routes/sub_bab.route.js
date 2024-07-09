const express = require("express")

const router = express.Router()

const {index} = require ('../controllers/sub_bab.controller')

router.get("/:id", index)

module.exports = router