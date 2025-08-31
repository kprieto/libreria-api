const mongoose = require("mongoose");

const LibroSchema = new  mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    anioPublicacion: {type:Number},
    autor: {
        type: mongoose.Schema.Types.ObjectId, ref: "Autor"
    }
});

module.exports = mongoose.model("Libro", LibroSchema);