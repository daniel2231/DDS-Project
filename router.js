let express = require("express");
let router = express.Router();
const viewPath = "./views/";

router.get("/", (req, res) => {
  res.sendFile(viewPath + "index.html", { root: __dirname });
});

router.get("/restaurant", (req, res) => {
  res.sendFile(viewPath + "restaurant.html", { root: __dirname });
});

router.get("/random", (req, res) => {
  res.sendFile(viewPath + "random.html", { root: __dirname });
});

router.get("/bar", (req, res) => {
  res.sendFile(viewPath + "bar.html", { root: __dirname });
});

let rsData = [
  {
    rsid: "정돈",
  },
  {
    rsid: "마라탕",
  },
  {
    rsid: "345",
  }
];

let brData = [
  {
    brid: "987",
  },
];

router.get("/restaurant/:rsid", function (req, res, next) {
  let rsid = req.params.rsid;
  res.sendFile(viewPath + `/restaurant/${rsid}.html`, { root: __dirname });
});

router.get("/bar/:brid", function (req, res, next) {
  let brid = req.params.brid;
  res.sendFile(viewPath + `/bar/${brid}.html`, { root: __dirname });
});

module.exports = router;
