let input = document.createElement('input');
let button = document.createElement('button');

button.innerText = 'click me';

document.querySelector('body').append(input);
document.querySelector('body').append(button);

//q2
button.setAttribute('id', 'btn');
input.setAttribute('placeholder','username');

//access the btn using query selector
let btn = document.querySelector('#btn');
btn.classList.add('btnStyle')

//q3 
//create an h1 element
let h1 = document.createElement('h1');
h1.innerHTML = '<u> DOM practice </u>';
document.querySelector('body').append(h1);

//q4
//create a p tag on the page
let para = document.createElement('p');
para.innerHTML = 'Apna College <b>Delta</b> Practice';
document.querySelector('body').append(para);



