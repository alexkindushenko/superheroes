const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8888,
  MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/superheroesDB";

app.use(cors());

app.use(express.json());

app.use("/superheroes", require("./routes/superheroes"));

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    app.listen(PORT, () => {
      console.log(`Server runing on port ${PORT}`);
    });
  },
  (err) => {
    console.log(err);
  }
);
