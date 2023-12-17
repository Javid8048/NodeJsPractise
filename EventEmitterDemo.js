const EventEmitter = require("events");
const createEvent = new EventEmitter();

createEvent.on("request", () => {
    console.log("Request accepted");
})
createEvent.on("response", () => {
    console.log("Response accepted");
})
createEvent.on("plk", () => {
    console.log("plk accepted");
})

createEvent.emit("request");
createEvent.emit("response");
createEvent.emit("plk");