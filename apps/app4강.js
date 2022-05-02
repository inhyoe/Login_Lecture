
// 모듈
const express = require('express');
const app =express();
const PORT = 3000;
// 라우팅
const home = require("../routes/home")

app.set("views",
        "./views"//폴더명
        );
app.set("view engine","ejs")



app.use("/",home); // use 미들웨어를 등록해주는 메서드

app.listen(PORT, function () {
    console.log('서버 가동');
});

module.exports = app;