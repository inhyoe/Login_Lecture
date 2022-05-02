const express = require('express');
const http = require('http')
const app = http.createServer((req,res)=>{
    res.writeHead(200,{ "Content-Type" :"text/html; charset=utf-8 "})
    // 한글 출력을위한 코드
    console.log(req.url);
    // 유저가 사용하는 서버에 url이 찍힘 라우팅 사용
    if(req.url === '/'){
        res.end("여기는 루트입니다")
    }else if(req.url === "/login"){
        res.end("여기는 로그인입니다") 
    }// 코드가 지저분해짐
})

app.listen(3001,function(){
    console.log('http로 가동된 서버입니다.');
})

// app.get("/",(req,res)=>{ //요청이 뭔지 알아야되니까 req 어떤반응 res
//     res.send("여기는 루트입니다")
// });

// app.get("/login", (req,res) =>{
//     res.send("여기는 로그인입니다.")
// })

// app.listen(3000,function(){
//     console.log('서버 가동');
// });