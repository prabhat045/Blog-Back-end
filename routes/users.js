const express = require("express");
const router = express.Router();

const { postUsers, authorizeUsers } = require("../controllers/users");

router.post("/register", postUsers);
router.post("/login", authorizeUsers);

module.exports = router;
