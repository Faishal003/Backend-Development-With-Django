//fetch data

let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");
let p = document.querySelector("#result");

btn.addEventListener('click', async ()=>{
    let fact = await getFacts();
    console.log(fact);
    p.innerText = fact; 
})


//axios 
async function getFacts(){
    try {
        let res = await axios.get(url);
        // console.log(res.data.fact);
        
        return res.data.fact;
    } catch (error) {
        console.log(`Error is: ${error}`);
        return "No fact found"
    }
}
