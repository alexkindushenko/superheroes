const Superhero = require("../../models/superhero");

module.exports = async (req, res) => {
  try {
    const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = req.body;

    const superhero = new Superhero({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    });

    await superhero.save();

    return res.status(201).json({
      superhero,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};
