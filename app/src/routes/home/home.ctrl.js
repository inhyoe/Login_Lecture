
const output = {
    home : (req, res) => { //요청이 뭔지 알아야되니까 req 어떤반응 res
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login") //뷰
    } 

}

const process = {
    login : (req, res) => {
        console.log(req.body);
    } 
}



module.exports = {
    output,process,
};

// { key : key }
