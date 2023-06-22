const express = require("express"); // express 모듈 불러오기
const router = express.Router();

router.post("/get_image", (req, res) => {
  const imgURL =
    "https://mblogthumb-phinf.pstatic.net/20160106_209/kukjeart_inc_1452055876208XMVrB_JPEG/%C5%E4%B3%A2_%285%29.jpg?type=w800";

  res.send('<img src="${imgURL}" alt=Image>');
});

module.exports = router;
