function savetoDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("Success: data saved successfully");
        }else{
            reject("Failure: Bad Network Connection");
        }
    });
}

// let request = savetoDB("faishal");
// request.then(()=>{
//     console.log("Promise was resolved.");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected.");
//     console.log(request);
// })

//same but more compact way should be

savetoDB("faishal")
.then((result)=>{
    console.log("first data saved");
    console.log(result)
    return savetoDB("ahmed")
})
.then((result)=>{
    console.log("second data saved");
    console.log(result)
    return savetoDB("emon");
})
.then((result)=>{
    console.log("third data saved.");
    console.log(result);
})
.catch((error)=>{
    console.log("Promise was rejected.");
    console.log(error);
})