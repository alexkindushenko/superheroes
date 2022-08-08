const Superhero = require("../../models/superhero");

module.exports = async (req, res, skip) => {
  try {
    const intSkip = parseInt(skip);

    const superheroes = await Superhero.find();

    return res.json({
      superheroes: superheroes.slice(intSkip, intSkip + 5),
      totalCount: superheroes.length,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};
