//addeventlistener

let p = document.querySelector("p")
console.dir(p)
p.addEventListener('click', function(){
    p.style.color = "red"
})

let div = document.querySelector('div')
div.addEventListener("mouseenter", function(){
    div.style.backgroundColor = "yellow"
})
