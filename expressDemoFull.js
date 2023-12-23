const express = require("express")
const morgan = require("morgan")
const authorize = require("./authorize")
const {readFileSync, writeFileSync, read} = require("fs")

const app = express();
app.use(express.static("./publicFolder"))
app.use(express.urlencoded({extended: false}))
app.use(morgan("tiny"));

app.get("/", authorize, (req, res) => {
    console.log(req.url)
    // res.write("Connection ok");
    const readFile = readFileSync("./webPage/webpageIndex.html", "utf-8");
    res.send(readFile);
    res.end()
})
app.get("/login/user",authorize, (req, res) => {
    console.log(res.query, "ok")
    res.send(`success we got ${req.params.name}`)
    res.end();
})

app.get("*", authorize, (req, res) => {
    res.status(404).send("<h1 style='text-align: center'>404 error<h1>")
    res.end();
})


app.post("/login", (req, res) => {
    const {name} = req.body
    if(name) {
        res.send(`Welcome ${name}`)
    }
    else {
        res.send("Unauthorized")
    }
    res.end()
})

app.listen(5000)