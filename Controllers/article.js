const Article = require("../models/Articles");

const PostArticles = async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    mainbody: req.body.mainbody,
    userId: req.body.userId,
  });
  try {
    article.save();
    const { title, description, mainbody, userId } = article;
    const obj = { title, description, mainbody, userId };
    res.json(obj);
  } catch (err) {
    console.log(err.message);
  }
};

const getArticles = async (req, res) => {
  try {
    const response = await Article.find();
    res.json(response);
  } catch (err) {
    res.json(err.message);
  }
};

const getMyarticles = async (req, res) => {
  try {
    const userId = req.query.userId;
    const response = await Article.find({ userId: userId });
    res.json(response);
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = { PostArticles, getArticles, getMyarticles };
