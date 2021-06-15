const handleWrite = (req, res, db) => {
  const { title, description, body } = req.body;
  db("write")
    .returning("*")
    .insert({
      title: title,
      description: description,
      body: body,
    })
    .then((blog) => {
      res.json(blog[0]);
    })
    .catch((err) => res.status(400).json("error"));
};

module.exports = {
  handleWrite: handleWrite,
};
