
const output = {
    home : (req, res) => { //요청이 뭔지 알아야되니까 req 어떤반응 res
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login") //뷰
    } 

}

const users = {
    id : ["woorimit","나개발","김개발"],
    psword : ["1234","1234","1234"]
};


const process = {
    login : (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;
        console.log(id);
        console.log(psword);
        
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success:false,
            msg : "로그인에 실패 "
        })
            
        
    } 
}



module.exports = {
    output,process,
};

// { key : key }
