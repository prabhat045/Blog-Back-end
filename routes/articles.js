const express = require("express");
const router = express.Router();

const { PostArticles } = require("../Controllers/article");
router.post("/write", PostArticles);
module.exports = router;
