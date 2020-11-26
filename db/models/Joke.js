module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Joke", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
    },
  });
};
