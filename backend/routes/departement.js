const Departement = require("../models/departement");
const express = require("express");

const router = express.Router();

router.post("/ajout", (req, res) => {
  let data = req.body;
  let dep = new Departement(data);
  dep
    .save()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/all", (req, res) => {
  Departement.find()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  let id = req.params.id;
  Departement.findById({ _id: id })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  Departement.findByIdAndDelete({ _id: id })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.put("/update/:id", (req, res) => {
  let id = req.params.id;
  let newData = req.body;
  Departement.findByIdAndUpdate({ _id: id }, newData)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
