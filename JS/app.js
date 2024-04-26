//fetch data

let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
let img = document.querySelector("#result");

btn.addEventListener('click', async ()=>{
    let link = await getFacts();
    console.log(link);
    img.setAttribute("src", link);
})


//axios 
async function getFacts(){
    try {
        let res = await axios.get(url);
        // console.log(res.data.fact);
        return res.data.message;
    } catch (error) {
        console.log(`Error is: ${error}`);
        return "No Image found";
    }
}
