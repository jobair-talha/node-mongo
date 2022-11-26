const Product = require("../models/productModel");
const cloudinary = require("../utils/cloudinary");

const getProducts = async (req, res, next) => {
  try {
    if (req.query.page && req.query.limit) {
      const response = await Product.paginate(
        { brand: "Xiaomi" },
        { page: req.query.page, limit: req.query.limit }
      );
      return res.status(200).json(response);
    }

    const data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (req, res, next) => {
  const { name, brand, desc, price, image } = req.body;

  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload_large(image, {
        upload_preset: "products",
        chunk_size: 2000000,
      });

      if (uploadRes) {
        const product = new Product({
          name,
          brand,
          desc,
          price,
          image: uploadRes,
        });

        await product.save();

        res.status(200).json({ message: "New product created successfully!" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  createProduct,
};
