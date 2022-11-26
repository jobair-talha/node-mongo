const { model, Schema } = require("mongoose");

const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: Object,
    required: true,
  },
});

productSchema.plugin(mongoosePaginate);

module.exports = model("Product", productSchema);
