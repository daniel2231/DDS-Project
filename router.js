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
    rsid: "바오밥",
  },
  {
    rsid: "메밀향 그집",
  },
  {
    rsid: "청춘직화",
  },
  {
    rsid: "정돈",
  },
  {
    rsid: "산쪼메 성균관대점",
  },
  {
    rsid: "소친친",
  },
  {
    rsid: "명륜건강원",
  },
  {
    rsid: "파스타마켓",
  },
  {
    rsid: "파스타마켓",
  },
  {
    rsid: "깔리",
  },
  {
    rsid: "부부식당",
  },
  {
    rsid: "호호식당",
  },
  {
    rsid: "쪼리닭",
  },
  {
    rsid: "버거파크",
  },
  {
    rsid: "혜화칼국수",
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
