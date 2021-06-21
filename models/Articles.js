const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  mainbody: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Article", Article);
