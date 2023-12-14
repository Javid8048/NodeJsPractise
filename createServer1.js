const http = require("http");

const server = http.createServer((req, res) => {
    // res.write("Welcome, your request had accepted");
    // res.end();
    if(req.url === "/") {
        res.write("Welocome to main page");
    }
    else if(req.url === "/about") {
        res.write("You r in About page");
    }
    res.end();
})

server.listen(5000);