const { Joke } = require("../db/models");

exports.jokeLike = async (req, res) => {
  try {
    const joke = await Joke.findOne({
      where: { text: req.body.text },
    });
    if (joke) {
      console.log("FOUND JOKE", joke);
      joke.update({ ...joke, likes: joke.likes + 1 });
      console.log(
        "🚀 ~ file: jokeController.js ~ line 13 ~ exports.jokeLike= ~ joke",
        joke
      );
      res.status(201).json({ likes: joke.likes });
    } else {
      const joke = await Joke.create({ ...req.body, likes: 1 });
      console.log("CREATE JOKE", joke);
      res.status(201).json(joke);
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: jokeController.js ~ line 7 ~ exports.jokeLike= ~ error",
      error
    );
  }
};
