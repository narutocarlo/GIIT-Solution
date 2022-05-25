const mongoose = require("mongoose")

const connectdataBase = mongoose.connect("mongodb+srv://lalitUpadhyay:lalit1995@cluster0.iyqbh.mongodb.net/imbd?retryWrites=true&w=majority").then(() => console.log("Db Conneted"))



module.exports = connectdataBase