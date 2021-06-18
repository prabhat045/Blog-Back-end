const User = require("../models/User");
const bcrypt = require("bcryptjs");

const postUsers = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.json(user);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { postUsers };
