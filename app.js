const chalk = require("chalk");
const express = require("express");
const app = express();
require("dotenv").config();
const dbconnect = require("./db/dbconnect");
const book = require("./routes/book");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// DB Connect
dbconnect();
//ROUTES
app.use("/api/books", book);

// parse application/json

app.listen(process.env.PORT, () => {
  console.log(chalk.blue.bold(`${process.env.PORT} Listen`));
});
