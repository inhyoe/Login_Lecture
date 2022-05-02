const express = require('express');
const app = express();


// 앱 세팅
app.set("views",
        "./views"//폴더명
        );
app.set("view engine","ejs")

// app.get("/", (req, res) => { //요청이 뭔지 알아야되니까 req 어떤반응 res
//     res.render("home/index");
// });

// app.get("/login", (req, res) => {
//     res.render("home/login") //뷰
// })
//  라우팅한 부분

const home = require("./routes/home")
app.use("/",home); // use 미들웨어를 등록해주는 메서드

app.listen(3000, function () {
    console.log('서버 가동');
});