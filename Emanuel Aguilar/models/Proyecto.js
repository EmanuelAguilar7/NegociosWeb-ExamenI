
const Sequilize = require("sequelize");

const slug = require("slug");

const shortid = require("shortid");

const Proyecto = db.define(
    "proyecto",
    {
      
      monto: {
        type: Sequilize.STRING,
      },
      awos: {
        type: Sequilize.STRING,
      },
      tasa: {
        type: Sequilize.STRING,
      },
      url: {
        type: Sequilize.STRING,
      },
    }
  );

