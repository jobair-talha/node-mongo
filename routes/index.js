const router = require("express").Router();
const productRoutes = require("./product");

router.use("/api/v1/products", productRoutes);

module.exports = router;
