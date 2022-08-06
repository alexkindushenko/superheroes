const { Router } = require("express");
const router = Router();

const sendSuperheroes = require("../controllers/superheroes/sendSuperheroes");
const addSuperhero = "../controllers/superheroes/addSuperhero";

router.patch("/", async (req, res) => {
  sendSuperheroes(req, res);
});

router.post("/", async (req, res) => {
  addSuperhero(req, res);
});

module.exports = router;
