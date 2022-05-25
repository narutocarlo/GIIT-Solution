const connectdataBase = require("./config/db")
const express = require("express");
const app = express()
const cors = require("cors")
const StudenRoute_2 = require("./StudentRoutes/StudentRoute_2.js")
const StudentRoute_1 = require("./StudentRoutes/StudentRoute_1")



app.use(cors())
app.use(express.json())
app.use('/', StudenRoute_2)
app.use('/', StudentRoute_1)


app.listen(4000,()=>console.log("Server Started"))