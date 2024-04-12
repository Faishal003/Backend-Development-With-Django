//adding elements on page

//let create an element is paragraph
let newP = document.createElement('p');

//add some text inside the paragraph
newP.intterText("This is a new paragraph section");

//to check text add or not 
newP //console command

//now add the paragraph in any section i choose body section to do that
let body = document.querySelector('body');

//appendChild is need to add newap in body
body.appendChild(newP) //text is added on the last in body element



//now i want to add some text in newP section
newP.append("extra added text");

//also create some button
let btn = document.createElement('button');

//insted of using appendChild we can use append also
body.append(btn) // added to the last.
body.prepend(btn) //added to the first.

//to add any position using insertAdjacentElement(which position should i put, which element should i put)

body.insertAdjacentElement("beforebegin", btn);
body.insertAdjacentElement("afterbegin",btn);
body.insertAdjacentElement("beforeend",btn);
body.insertAdjacentElement("afterend",btn);
