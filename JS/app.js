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
.then(()=>{
    console.log("Promise was resolved.");
})
.catch(()=>{
    console.log("Promise was rejected.");
})