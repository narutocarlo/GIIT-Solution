const Student = require("../models/Student");
const jwt = require("jsonwebtoken");




const getJWT = (payload) => {
    return jwt.sign(payload, "lalit@1995", { expiresIn: 60 * 60  })
}

exports.createStudent = async (req, res, nxt) => {
    const { Email } = req.body
    let newStudent = req.body

    const isStudentEmailExist = await Student.findOne({ Email })
    if (isStudentEmailExist) {

        return res.status(400).json({
            success: false,
            massage: "Student Already exist"
        })

    }
    const roll = await Student.aggregate([
        { $project: { "RollNumber": 1, "_id": 0 } }
    ])
    console.log(roll.length);
    if (roll.length === 0) {
    const student = await Student.create(newStudent  )
   
        res.status(200).json({
        success: true,
        student,
    }) 
    }
    
    const number = roll[roll.length - 1].RollNumber

    const student = await Student.create({ ...newStudent, RollNumber: number + 1  })


    res.status(200).json({
        success: true,
        student,
    })
}

exports.getAllStudents = async (req, res) => {
    const student = await Student.find()
    res.status(200).json({
        success: true,
        student
    })
}




exports.getStudent = async (req, res, nxt) => {
    const { Email } = req.body
    const isStudentEmailExist = await Student.findOne({ Email })
    if (!isStudentEmailExist) {

        return res.status(404).json({
            success: false,
            massage: "Student does not exist"
        })

    }

    res.status(200).json({
        success: true,
        isStudentEmailExist,
    })
}


exports.updateStudent = async (req, res) => {
    const { Email } = req.body
    const updateData = req.body

    const student = await Student.findOne({ Email })
    if (!student) {
        return res.status(404).json({
            massage: "Student does not exist"
        })
    }
    const updatedStudent = await Student.updateOne({ Email: Email }, updateData)

    res.status(200).json({
        success: true,
        updatedStudent
    })

}


exports.deleteStudent = async (req, res) => {
    const { Email } = req.body


    const student = await Student.findOne({ Email })
    if (!student) {
        return res.status(404).json({
            massage: "Student does not exist"
        })
    }
    const deletedStudent = await Student.deleteOne({ Email })

    res.status(200).json({
        success: true,
        massage: "student  is Deleted",
        deletedStudent
    })

}



