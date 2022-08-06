const Superhero = require("../../models/superhero");

module.exports = async (req, res, id) => {
  try {
    const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = req.body;

    await Superhero.findByIdAndUpdate(id, {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    });

    return res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};
