const Article = require("../models/Articles");

const PostArticles = async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    mainbody: req.body.mainbody,
    id: req.body.id,
  });
  try {
    article.save();
    const { title, description, mainbody, id } = article;
    const obj = { title, description, mainbody, id };
    res.json(obj);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { PostArticles };
