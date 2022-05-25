const express = require("express")
const router = express.Router()
const { getAllStudents,deleteStudent,createStudent,getStudent,updateStudent } = require("../contorller/StudentController_2.js.js")
const {jwtAuthentication} = require("../middelware/AuthenticationJwt")

router.get('/getAllStudents',getAllStudents)
router.get('/getStudent',getStudent)
router.post('/createStudent',createStudent)
router.put('/updateStudent',updateStudent)
router.delete('/deleteStudent',deleteStudent)




module.exports = router