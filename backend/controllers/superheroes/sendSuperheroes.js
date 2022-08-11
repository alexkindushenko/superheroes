const Superhero = require("../../models/superhero");

module.exports = async (req, res, _page) => {
  try {
    const superheroes = await Superhero.find();

    const skipSuperheros = (parseInt(_page) - 1) * 5;
    console.log(skipSuperheros);

    return res.json({
      superheroes: superheroes.reverse().slice(skipSuperheros, skipSuperheros + 5),
      pageCount: Math.ceil(superheroes.length / 5),
      currentPage: parseInt(_page),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};
