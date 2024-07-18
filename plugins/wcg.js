const {plugin,WCG} = require("../lib")

inrl({
    on: "text",
    pattern: "wcg",
    type: "game",
    desc: "Word Chain game",
    fromMe: false,
    onlyGroup: true
}, async (message) => {
    const try_to_start = new WCG(message);
    try_to_start.start();
});
