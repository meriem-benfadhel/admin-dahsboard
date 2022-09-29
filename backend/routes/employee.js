const Employee = require("../models/employee");
const express = require("express");
const router = express.Router();
const multer = require("multer");

let filename = "";

const myStorage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, redirect) => {
    let f1 = Date.now() + "." + file.mimetype.split("/")[1];
    redirect(null, f1);
    filename = f1;
  },
});

const upload = multer({ storage: myStorage });

router.post("/ajout", upload.any("image"), (req, res) => {
  let data = req.body;
  let emp = new Employee(data);
  emp.image = filename;

  emp
    .save()
    .then((response) => {
      filename = "";
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/all", (req, res) => {
  Employee.aggregate(
   [ {
      $lookup:{
        from: 'departements',
        localField: 'idDep',
        foreignField:'_id',
        as: 'dep'
      }
    }]
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
   
});

router.get("/getbyid/:id", (req, res) => {
  let id = req.params.id;
  Employee.findById({ _id: id })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  Employee.findByIdAndDelete({ _id: id })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.put("/update/:id",upload.any("image"), (req, res) => {
  let id = req.params.id;
  let newData = req.body;

  if (filename.length > 0){
    newData.image = filename
  }
  
  Employee.findByIdAndUpdate({ _id: id }, newData)
    .then((response) => {
      filename=''
      console.log(newData)
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
