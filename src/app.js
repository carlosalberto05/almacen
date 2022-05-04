// ************ Require's ************
const express = require("express");
const path = require("path");
const port = process.env.PORT || 3001;

// ************ express() ************
const app = express();

// ************ Middlewares  ************
// Configuración para la carpeta public
app.use(express.static(path.resolve(__dirname, "../public")));
//Captura la informacion que viene del formulario via post
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ************ Template Engine - (don't touch) ************
//Configuración para ejs y la carpeta view
app.set("view engine", "ejs");
//Configuración para las vistas que estan dentro de subcarpetas en view
app.set("views", path.join(__dirname, "views"));

// ************ Route System require and use() ************
const mainRoutes = require("./routes/mainRoute");
const productsRoutes = require("./routes/productsRoutes");

app.use("/", mainRoutes);
app.use("/products", productsRoutes);

app.get("/", function (req, res) {
  res.send("Bienvenidos al sitio");
});

//Al final levantamos el servidor
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto 3001");
});
