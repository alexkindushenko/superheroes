const Superhero = require("../../models/superhero");
const { Types } = require("mongoose");

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
      _id: Types.ObjectId(),
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
