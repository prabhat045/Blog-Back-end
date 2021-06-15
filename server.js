const express = require("express");
const bodyParser = require("body-parser");

const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
const register = require("./Controllers/register");
const signin = require("./Controllers/signin");
// const profile = require("./Controllers/profile");
const write = require("./Controllers/write");
const article = require("./Controllers/article");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "1234",
    database: "blog",
  },
});
const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send(database.users);
// });

app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.post("/write", (req, res) => {
  write.handleWrite(req, res, db);
});
app.get("/article", (req, res) => {
  article.handleArticle(req, res, db);
});

// app.get("/profile/:id", (req, res) => {
//   profile.handleProfileGet(req, res, db);
// });

app.listen(3000);
