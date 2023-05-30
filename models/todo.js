const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    }
})


module.exports = new mongoose.model("Todo", toDoSchema);