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
    res.send("You are in home page.")
})

app.get('/about', (req, res)=>{
    res.send("You are in about page.")
})

app.get('/search', (req, res)=>{
    res.send("You are in search page.")
})

app.get('*', (req, res)=>{
    res.send("404 Bad request!!")
})

app.post('/', (req, res)=>{
    res.send("You are in home page and request a post req")
})