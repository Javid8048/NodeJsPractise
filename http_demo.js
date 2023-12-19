const http = require("http");
const server = http.createServer((req, res) => {
    res.write("Ok Success");
    res.end("\nWrite this");
});

server.listen(6776);