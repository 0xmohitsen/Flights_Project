const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();
const db = require("./models/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
// app.use("/flightsService/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

  // if (ServerConfig.DB_SYNC) {
  //   db.sequelize.sync({ alter: true });
  // }
});

/**
 * In class task
 * Setup flights table using sequelize
 */
