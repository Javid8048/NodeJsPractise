const {createReadStream, writeFileSync} = require("fs");

writeFileSync("./txt_Files/HelloLoop.txt", "ok \n", {flag: 'a'});

const stream = new createReadStream("./txt_Files/HelloLoop.txt", {encoding: "utf-8"});
stream.on("data", (result) => {
    console.log(result);
})
