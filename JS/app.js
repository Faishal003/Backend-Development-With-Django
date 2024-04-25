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
    userSeq = [];
    level++;
    h2.innerText = `Level: ${level}`
    
    //random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btnColor[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);//game sequence color is added automatically on that.
    console.log(`gameseq: ${gameSeq}`);

    btnFlash(randBtn);
}

function btnFlashUser(btn){
    btn.classList.add("flash_black");
    setTimeout(function(){
        btn.classList.remove("flash_black")
    }, 250)
}

function btnPress(){
    let btn = this;
    btnFlashUser(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    console.log(`userseq: ${userSeq}`);

    checkAns(userSeq.length - 1);
}

function checkAns(idx){

    if (userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUP, 1000);
        }
    }else{
        h2.innerHTML = `Game over! Your Score is <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");
    for (btn of allBtns){
        btn.addEventListener("click", btnPress);
    }

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

