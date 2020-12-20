const mongoose = require("mongoose");
const chalk = require("chalk");
function dbconnect() {
  try {
    mongoose.connect(process.env.URL, {
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.green.bold("DB Connected"));
  } catch (error) {
    console.log(chalk.red(error));
  }
}

module.exports = dbconnect;
