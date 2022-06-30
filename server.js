const express = require("express");
// const cluster = require("cluster");
// const os = require("os");
const app = express();

function delay(duration) {
    const startTime = Date.now();

    while (Date.now() - startTime < duration) {
    }
};

app.get("/", (req, res) => {
    /* 
    JSON.stringify({}) => "{}"
    JSON.parse("{}") => { }
    [1, 2, 3, 4, 5].sort() 
    */

    res.send(`performance example running on ${process.pid}.`);
});

app.get("/timer", (req, res) => {
    delay(9000);
    res.send(`ding ding ding running on ${process.pid}.`);
});

/* if (cluster.isMaster) {
    console.log("Master is running...");
    const NUM_WORKERS = os.cpus().length;
    for (let i = 0; i < NUM_WORKERS; i++) {
        cluster.fork();
    }
}
else {
    console.log("Working process is running...")
    app.listen(3000);
}
 */

console.log("Master is running...");
console.log("Working process is running...")
cluster.fork();
