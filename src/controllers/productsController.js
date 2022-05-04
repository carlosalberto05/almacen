const productsController = {
  //Televisores - Listo all the televisions
  televisores: (req, res) => {
    res.render("products/televisores");
  },
  zapatos: (req, res) => {
    res.render("products/zapatos");
  },
  laptops: (req, res) => {
    res.render("products/laptops");
  },

  alta: (req, res) => {
    res.render("products/product-create-form");
  },
};

module.exports = productsController;
