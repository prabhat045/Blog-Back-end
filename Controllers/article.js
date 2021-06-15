const handleArticle = (req, res, db) => {
  db.select("*")
    .from("write")
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.status(400).json("error getting user"));
};

module.exports = {
  handleArticle: handleArticle,
};
