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
// fetch(url) //return promise
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data-01: ", data.fact);
//     return fetch(url);//if we again get any api response
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data-02: ", data.fact)
// })
// .catch((err)=>{
//     console.log(`Error is: ${err}`);
// })

//async await 

async function getFact(){
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log("Data-01: ", data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("Data-02: ", data2.fact);
    } 
    catch (error) {
        console.log(`Error is: ${error}`);
    }
}
