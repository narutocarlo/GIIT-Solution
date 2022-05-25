const express = require("express")
const router = express.Router()
const {getdata} = require("../contorller/StudentController_1.js.js")


router.get('/student',getdata)

module.exports = router