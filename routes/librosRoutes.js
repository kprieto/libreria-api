const express = require("express");

const Libro = require("../models/Libro");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.status(201).json(nuevoLibro);

    } catch (error){
        res.status(400).json({mensaje: "Error al crear el libro.", error});
    }
});

router.get("/", async (req, res) =>{
    const libros = await Libro.find().populate("autor");
    res.json(libros);
});

router.put('/:id', async (req, res) => {
    try {
        const libro = await Libro.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!libro) {
            return res.status(404).json({ mensaje: 'Libro no encontrado' });
        }
        res.json({
            mensaje: 'Libro actualizado correctamente.',
            libro: libro
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el libro.', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resultado = await Libro.findByIdAndDelete(req.params.id);
        res.json({
        mensaje: 'Libro eliminado correctamente',
        autor: resultado
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al eliminar el libro', error });
    }
});

module.exports = router;