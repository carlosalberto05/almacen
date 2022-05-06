const db = require("../database/models");
const Producto = db.Producto;

const productsController = {
  //Televisores - Listo all the televisions
  televisores: (req, res) => {
    Producto.findAll({
      where: {
        id_categori: 1,
      },
    })
      .then((televisiones) => {
        res.render("products/televisores", { televisiones });
      })
      .catch((err) => console.log(err));
  },
  zapatos: (req, res) => {
    Producto.findAll({
      where: {
        id_categori: 3,
      },
    })
      .then((zapatos) => {
        res.render("products/zapatos", { zapatos });
      })
      .catch((err) => console.log(err));
  },
  laptops: (req, res) => {
    Producto.findAll({
      where: {
        id_categori: 2,
      },
    })
      .then((laptops) => {
        res.render("products/laptops", { laptops });
      })
      .catch((err) => console.log(err));
  },

  alta: (req, res) => {
    res.render("products/product-create-form");
  },
};

module.exports = productsController;
