// const express = require("express")
// const morgan = require("morgan")
// const authorize = require("./authorize")
// const {datas} = require("./data")
// const {readFileSync, writeFileSync, read} = require("fs")
// const {router} = require("./router");

// const app = express();

// app.use(express.static("./publicFolder"))
// app.use(express.urlencoded({extended: false}))
// app.use(morgan("tiny"));
// app.use(router)
// // app.get("/data", (req, res)=> {
// //     res.json(datas)
// // })

// app.listen(5000)


const express = require('express');
const route = require("./router")
const app = express();
const PORT = 3000;
 
// Single routing
 
route.get('/', function (req, res, next) {
    console.log("Router Working");
    res.end();
})
 
app.use("/", route);
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});