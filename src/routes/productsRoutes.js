const express = require("express");
const router = express.Router();

//Controller
const productsController = require("../controllers/productsController");

/*** Televisores ***/
router.get("/televisores", productsController.televisores);

/*** Zapatos ***/
router.get("/zapatos", productsController.zapatos);

/*** Laptops ***/
router.get("/laptops", productsController.laptops);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.alta);

module.exports = router;
