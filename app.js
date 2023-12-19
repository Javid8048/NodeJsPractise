const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Success /")
});
app.all("*", (req, res) => {
    res.status(500).send("<h1 style='text-align: center'>404 page not found</h1>")
})

app.listen(5000);