const mongoose = require("mongoose");

const AutorSchema = new  mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    nacionalidad: {type:String}
});

module.exports = mongoose.model("Autor", AutorSchema);