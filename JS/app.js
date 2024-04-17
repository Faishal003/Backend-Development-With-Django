let btn = document.querySelector('button')


function randomColor () {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}

btn.addEventListener('click', function() {
    let h3 = document.querySelector('h3');
    let randomColora = randomColor();
    h3.innerText = randomColora;

    let div = document.querySelector("div")
    div.style.backgroundColor = randomColora;

    console.log('color is updated')
})