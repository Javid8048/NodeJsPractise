const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("./publicFolder"));
app.use(authorize);

app.get('/', (req, res) => {
    res.status(200).send("Success /")
});
app.get('/webPage', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./webPage/webPageIndex.html"))
})

app.all("*", (req, res) => {
    res.status(500).send("<h1 style='text-align: center'>404 page not found</h1>")
})

app.get("/data", (req, res) => {
    // res.send([{name: "javid"}, {"name": "Ashwaq"}]);
    res.json([{name: "javid"}, {"name": "Ashwaq"}])
    res.end()
})



app.listen(5000);