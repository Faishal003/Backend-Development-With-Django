let redPara = document.createElement('p');
redPara.innerText = "Hey, I'm red pragraph.";
document.querySelector('body').append(redPara);

redPara.classList.add("red");

let bluePara = document.createElement('h3');
bluePara.innerText = "Hey, I'm blue pragraph.";
document.querySelector('body').append(bluePara);

bluePara.classList.add("blue");

let div = document.createElement('div');
div.classList.add('div')

let h1 = document.createElement('h1');
h1.innerText = "I'm in div.";

div.append(h1)

let para2 = document.createElement('p');
para2.innerText = "I'm para 2";

div.append(para2)


document.querySelector('body').append(div)