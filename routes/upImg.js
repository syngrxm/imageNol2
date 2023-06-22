const express = require("express"); // express 모듈 불러오기
const router = express.Router();

router.post("/image", (req, res) => {
  const imgIn = "./imageNol2/rabbit.webp";

  res.sendFile(imgIn);
});

module.exports = router;
