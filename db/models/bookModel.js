const { Schema, model } = require("mongoose");

const book = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  page: { type: Number, required: true },
  price: { type: Number, required: true },
  file: { type: String, required: true },
  image: { type: String, required: true },
});
module.exports = model("Book", book);
