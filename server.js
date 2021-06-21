const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", require("./routes/users"));
app.use("/articles", require("./routes/articles"));

mongoose.connect(
  "mongodb+srv://prabhat:prabhat@cluster0.gbiyl.mongodb.net/blog?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
