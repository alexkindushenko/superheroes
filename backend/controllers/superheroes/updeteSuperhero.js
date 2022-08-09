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
      images: !images.length
        ? (images[0] = "https://gentwenty.com/wp-content/uploads/2013/07/Superheroes.jpg")
        : images,
    });

    return res.status(201).json({
      superhero: {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
        _id: id,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};
