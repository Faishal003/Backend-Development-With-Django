let gameSeq = [];
let userSeq = [];

let btnColor = ['pink','green','gray','purple'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
    }

    levelUP();
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250)
}

function levelUP() {
    level++;
    h2.innerText = `Level: ${level}`
    
    //random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let btnIdx = btnColor[randIdx];
    let randBtn = document.querySelector(`.${btnIdx}`)
    btnFlash(randBtn);
}

function btnPress(){
    //let btn = this;
    console.log(this);
}

let allBtns = document.querySelectorAll(".btn");
    for (btn of allBtns){
        btn.addEventListener("click", btnPress);
    }

