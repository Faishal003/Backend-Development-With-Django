const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on ${port}`);
})


//app.use send same respone to all path
// app.use((req, res) =>{
//     console.log("request received");
//     res.send({
//         name: "Faishal ahmed emon",
//         age: 24,
//     })
// })

app.get('/', (req, res)=>{
    res.send("You are in root path.")
})

app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params;
    let htmlStr = `<h1>hello @${username}. welcome to the homepage.</h1>`
    res.send(htmlStr);
})

app.get("/search", (req, res)=>{
    let {q} = req.query;
    if (!q){
        res.send("please enter a valid search.");
    }
    res.send(`these are the search results for ${q}`);
})