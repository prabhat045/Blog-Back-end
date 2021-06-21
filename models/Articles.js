const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mainbody: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Article", Article);
