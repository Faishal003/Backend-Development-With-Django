let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener('click',async ()=>{
    let country = document.querySelector("input").value;

    let uni = await getUniversities(country);
    show(uni);
});

function show(uni){
    let list = document.querySelector("#list");
    list.innerText = "";
    for (university of uni){
        console.log(university.name);

        let li = document.createElement('li');
        li.innerText = university.name;
        list.appendChild(li);  
    }
}

async function getUniversities(country){
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (error) {
        console.log(`Error: ${error}`);
        return [];
    }
}