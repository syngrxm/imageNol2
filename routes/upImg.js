const express = require("express");
const router = express.Router();
const path = require("path");

router.use(express.json());

router.post("/image", (req, res) => {
  const { imgPath } = req.body;
  const filePath = path.resolve(__dirname, imgPath);

  res.sendFile(filePath);
});

module.exports = router;
