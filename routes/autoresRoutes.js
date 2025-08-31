const express = require("express");

const Autor = require("../models/Autor");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const nuevoAutor = new Autor(req.body);
        await nuevoAutor.save();
        res.status(201).json(nuevoAutor);

    } catch (error){
        res.status(400).json({mensaje: "Error al crear el autor.", error});
    }
});

router.get("/", async (req, res) =>{
    const autores = await Autor.find();
    res.json(autores);
});

router.put('/:id', async (req, res) => {
    try {
        const autor = await Autor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!autor) {
            return res.status(404).json({ mensaje: 'Autor no encontrado' });
        }
        res.json({
            mensaje: 'Autor actualizado correctamente.',
            autor: autor
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el autor.', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resultado = await Autor.findByIdAndDelete(req.params.id);
        res.json({
        mensaje: 'Autor eliminado correctamente',
        autor: resultado
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al eliminar el autor', error });
    }
});

module.exports = router;