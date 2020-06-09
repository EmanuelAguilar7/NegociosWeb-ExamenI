
const express = require("express");

const exphbs = require("express-handlebars");

const bodyParser = require("body-parser");

const routes = require("./routes");

require("./models/Proyecto");

const app = express();

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());

app.listen(3306, () => {
  console.log("Servidor ejecutandose en el puerto 3306");
});
