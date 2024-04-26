//async await

// function getNum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

//previous color change code

let h1 = document.querySelector("h1"); 

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`Color changed to ${color}!`);
            resolve("Color changed");
        }, 1000);
    });
}

async function demo(){
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("pink", 1000);
    await changeColor("yellow", 1000);
    await changeColor("purple", 1000);
    changeColor("black", 1000);
}