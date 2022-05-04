

// 로그인 기능 구현
// front end

// front 에서 값을 입력한 후 server에서 반응

// DOM객체를 활용한다
// Document Object Model

const id = document.querySelector("#id"); // id = # , class .
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button")

console.log(id); // qSl로 부여하기 전에 clg가 먼저 실행됨 ejs의 특성

loginBtn.addEventListener("click", login);

function login() {
    console.log(id.value); // id의 value값.
    const req = {
        id: id.value,
        psword: psword.value
    };
    console.log(req);
    console.log(JSON.stringify(req)); // 문자열로 전달.


    fetch("/login", {
        //object 형태로 전달해야함
        method: "POST", // Restful : API -> 네트워크 통신을위한 통신규약.
        headers: {
            "Content-Type": "application/json"
            //나의 데이터 타입 : json의 데이터를 전달한다
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    // .then(console.log) 축약


}
