const Superhero = require("../../models/superhero");

module.exports = async (req, res, id) => {
  try {
    const superhero = await Superhero.findById(id);
    return res.json({ superhero });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};
