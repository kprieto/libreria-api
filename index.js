const express = require("express");

const connectDB = require("./database");

const dotenv = require("dotenv");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/libros", require("./routes/librosRoutes"));

app.use("/api/autores", require("./routes/autoresRoutes"));

app.listen(5000, () => {
    console.log(`Servidor corriendo en http://localhost:${5000}`);
    
})