const express = require("express");
const fs = require("fs"); /// fs = file system
const path = require("path");
const multer = require("multer");
const router = express.Router();

router.use(express.json());

const upload = multer({
  dest: path.join(__dirname, "uploads"),
});

router.post("/image", upload.single("flie"), (req, res) => {
  const { imgName } = req.body;
  const img = req.file.path;
  const imgEcd = Buffer.from(img, "base64");
  const imgDcd = imgEcd.toString("base64");
  const imgPath = path.join(__dirname, "uploads", imgName);

  fs.writeFile(imgPath, imgDcd, "base64", (err) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ errormessage: "이미지 저장 중 오류가 발생하였습니다." });
    } else {
      status: "성공!";
    }
  });
});

module.exports = router;
