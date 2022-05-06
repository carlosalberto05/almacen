const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Producto = db.Producto;

const mainController = {
  home: (req, res) => {
    let televisiones = Producto.findAll({
      where: {
        id_categori: 1,
      },
      limit: 3,
    });

    let laptops = Producto.findAll({
      where: {
        id_categori: 2,
      },
      limit: 3,
    });

    let zapatos = Producto.findAll({
      where: {
        id_categori: 3,
      },
      limit: 3,
    });

    Promise.all([televisiones, laptops, zapatos])
      .then(([televisiones, laptops, zapatos]) => {
        res.render("index", { televisiones, laptops, zapatos });
      })
      .catch((err) => console.log(err));
  },
};

module.exports = mainController;
