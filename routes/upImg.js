const express = require("express"); // express 모듈 불러오기
const router = express.Router();
const app = express(); // express app 생성

router.post("/image", (req, res) => {
  const imgIn =
    "/home/sumin/바탕화면/sendimganine/_F0ypmmjiqmdTETGiR4kZcVvoNFuF1Bo2XQXizafDyZtEbbc8YQP5qqZw7oPpZNhh07WBYoPPJbQkevd6bxGp9JP-E_AXIvI6nQZ9M8_AzPy3VCc-uwAdbFBreu45TWxebiPcDqiKGXOQmLiqMjc_A.webp";

  res.sendFile(imgIn);
});
