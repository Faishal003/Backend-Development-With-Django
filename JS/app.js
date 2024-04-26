//sending heades with api requests

let url = "https://icanhazdadjoke.com/";

async function getJokes(){

    try {
        let config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch (error) {
        console.log(`Error: ${error}`)
    }

}