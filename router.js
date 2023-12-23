const express = require("express")
const routerr = express.Router();
const {datas} = require("./data")

routerr.get("/data", (req, res, next)=> {
        res.json(datas)
})

module.exports = routerr