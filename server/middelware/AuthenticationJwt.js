const Student = require("../models/Student")
const jwt = require("jsonwebtoken")

const jwtAuthentication = async(req, res,nxt) => {
    const { token } = req.cookies
    if (!token) {
        return res.status(400).json({
            massage:"login first"
        })
    }
    const decodeData = jwt.verify(token, "lalit@1995")
    req.user = await Student.findById(decodeData.id)
    nxt()

    



}
module.exports = jwtAuthentication