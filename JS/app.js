let links = document.querySelectorAll(".box a")
console.log(links)

for (link of links) {
    link.style.color = 'green'; //inline style should change
}

// for (i = 0; i < links.length; i++){
//     links[i].style.color = "yellow";
// }

//manipulating style\
//classList.add() to add new class
//classList.remove() to remove class
//classList.contains() to check if class exists
//classList.toggle() to toggle between add and remove