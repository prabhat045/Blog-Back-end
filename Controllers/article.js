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

module.exports = { PostArticles };
