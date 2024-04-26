//fetch data


let url = "https://catfact.ninja/fact";


//get a readable steam
// fetch(url) //return promise
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(`Error is: ${err}`);
// })


//now can access the api data
fetch(url) //return promise
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("Data-01: ", data.fact);
    return fetch(url);//if we again get any api response
})
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("Data-02: ", data.fact)
})
.catch((err)=>{
    console.log(`Error is: ${err}`);
})
