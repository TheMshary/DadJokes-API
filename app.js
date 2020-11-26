const express = require("express");
const cors = require("cors");
const db = require("./db/models");
const jokeRoutes = require("./routes/jokes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/jokes", jokeRoutes);

const run = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
