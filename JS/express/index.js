const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on ${port}`);
})

app.use((req, res) =>{
    console.log("request received");
    res.send({
        name: "Faishal ahmed emon",
        age: 24,
    })
})