const User = require("../models/User");
const bcrypt = require("bcryptjs");

const postUsers = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    await user.save();
    const { id, name, email } = user;
    const obj = { id, name, email };
    res.json(obj);
  } catch (err) {
    console.log(err.message);
  }
};

const authorizeUsers = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exist");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Incorrect password");
  const { id, name, email } = user;
  const obj = { id, name, email };
  res.json(obj);
};

module.exports = { postUsers, authorizeUsers };
