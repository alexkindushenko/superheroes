const { Schema, model } = require("mongoose");

module.exports = model(
  "Superhero",
  new Schema({
    nickname: {
      type: String,
      required: true,
    },
    real_name: {
      type: String,
      required: true,
    },
    origin_description: {
      type: String,
      required: true,
    },
    superpowers: {
      type: String,
      required: true,
    },
    catch_phrase: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      imgUrl: {
        type: String,
        required: true,
      },
    },
  })
);
