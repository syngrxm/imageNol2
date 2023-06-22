const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

const imgupload = require("/home/sumin/바탕화면/imageNol2/routes/upImg.js");
const imgdwload = require("/home/sumin/바탕화면/imageNol2/routes/dwImg.js");

app.get("/", (req, res) => {
  res.send("F.i.l.e.을 보내고 받아 보께요");
});

app.use("", imgdwload);
app.use("", imgupload);

app.listen(app.get("port"), () => {
  console.log(app.port("port"), "번 포트에서 대기 중");
});
