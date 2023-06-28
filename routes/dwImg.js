const express = require("express"); // express 모듈 불러오기
const router = express.Router();

router.use(express.json());

router.post("/get_image", (req, res) => {
  const { imgLink } = req.body;

  res.send(`<img src="${imgLink}" alt="Image">`);
});

module.exports = router;
