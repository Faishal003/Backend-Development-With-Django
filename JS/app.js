let btns = document.querySelectorAll("button")
console.dir(btns)
// btn.onclick = greetings

function greetings(){
    console.log("welcome here")
}

for (btn of btns) {
    btn.onclick = greetings
}