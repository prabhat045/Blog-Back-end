const express = require("express");
const router = express.Router();

const { postUsers } = require("../controllers/users");

router.post("/", postUsers);

module.exports = router;
