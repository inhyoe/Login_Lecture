
// 모듈
const express = require('express');
const app =express();


// 라우팅
const home = require("./routes/home")

app.set("views",
        "./views"//폴더명
        );
app.set("view engine","ejs")

//https://www.youtube.com/watch?v=Jy9quSZbVTc&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=10

app.use("/",home); // use 미들웨어를 등록해주는 메서드

module.exports = app; // 이제 여기서 실행시키는 것이 아닌 www 파일에서 실행