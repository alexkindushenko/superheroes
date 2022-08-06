const Superhero = require("../../models/superhero");

module.exports = async (req, res, id) => {
  try {
    await Superhero.findByIdAndDelete(id);

    return res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};
