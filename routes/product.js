const {
  getProducts,
  createProduct,
} = require("../controller/productController");

const router = require("express").Router();

router.get("/", getProducts);
router.post("/", createProduct);

module.exports = router;
