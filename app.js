const express = require("express");
const cors = require("cors");
const db = require("./db/models");
const jokeRoutes = require("./routes/jokes");

const app = express();

// Middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(express.json());
app.use("/jokes", jokeRoutes);

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

run();
