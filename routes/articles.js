const express = require("express");
const router = express.Router();

const { PostArticles, getArticles } = require("../Controllers/article");
router.post("/write", PostArticles);
router.get("/getarticles", getArticles);
module.exports = router;
