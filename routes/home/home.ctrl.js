const home = (req, res) => { //요청이 뭔지 알아야되니까 req 어떤반응 res
    res.render("home/index");
}

const login = (req, res) => {
    res.render("home/login") //뷰
} 

module.exports = {
    home,
    login,
};

// { key : key }
