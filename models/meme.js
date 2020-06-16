const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    }
});

const MemeTemp = mongoose.model("MemeTemp", memeSchema);

module.exports = MemeTemp;