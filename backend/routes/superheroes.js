const { Router } = require("express");
const router = Router();

const sendSuperheroes = require("../controllers/superheroes/sendSuperheroes");
const addSuperhero = require("../controllers/superheroes/addSuperhero");
const deleteSuperhero = require("../controllers/superheroes/deleteSuperhero");
const updeteSuperhero = require("../controllers/superheroes/updeteSuperhero");

router.patch("/", async (req, res) => {
  sendSuperheroes(req, res);
});

router.post("/", async (req, res) => {
  addSuperhero(req, res);
});

router.delete("/:id", (req, res) => {
  deleteSuperhero(req, res, req.params.id);
});

router.put("/:id", (req, res) => {
  updeteSuperhero(req, res, req.params.id);
});

module.exports = router;
