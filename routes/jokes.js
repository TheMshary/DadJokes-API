const express = require("express");
const router = express.Router();
const { jokeLike } = require("../controllers/jokeController");

// Cookie Create
router.post("/like", jokeLike);

module.exports = router;
