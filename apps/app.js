const express = require('express');

const app = express();

app.get("/",(req,res)=>{ //요청이 뭔지 알아야되니까 req 어떤반응 res
    res.send("여기는 루트입니다")
});

app.get("/login", (req,res) =>{
    res.send("여기는 로그인입니다.")
})

app.listen(3000,function(){
    console.log('서버 가동');
});