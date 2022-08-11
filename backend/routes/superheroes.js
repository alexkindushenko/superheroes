const { Router } = require("express");
const router = Router();

const sendSuperheroes = require("../controllers/superheroes/sendSuperheroes");
const sendSuperhero = require("../controllers/superheroes/sendSuperhero");
const addSuperhero = require("../controllers/superheroes/addSuperhero");
const deleteSuperhero = require("../controllers/superheroes/deleteSuperhero");
const updeteSuperhero = require("../controllers/superheroes/updeteSuperhero");

router.patch("/", async (req, res) => {
  sendSuperheroes(req, res, req.query._page);
});

router.patch("/:id", async (req, res) => {
  sendSuperhero(req, res, req.params.id);
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
