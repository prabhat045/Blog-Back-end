const User = require("../models/User");
const bcrypt = require("bcryptjs");

const postUsers = async (req, res) => {
  //Checking if user already exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    await user.save();
    res.json({ user });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { postUsers };
