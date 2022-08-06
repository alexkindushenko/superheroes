const Superhero = require("../../models/superhero");

module.exports = async (req, res) => {
  try {
    const superheroes = await Superhero.find({});

    return res.json({
      superheroes,
    });
  } catch (error) {
    console.log(error);
  }
};
