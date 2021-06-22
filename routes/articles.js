const express = require("express");
const router = express.Router();

const {
  PostArticles,
  getArticles,
  getMyarticles,
} = require("../Controllers/article");
router.post("/write", PostArticles);
router.get("/getarticles", getArticles);
router.get("/getMyarticles", getMyarticles);

module.exports = router;
