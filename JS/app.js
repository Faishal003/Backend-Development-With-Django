let btn = document.querySelector("button");
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

inp.addEventListener('keydown',function(event){
    if(event.code == "Enter"){
        btn.click();
    }
})

btn.addEventListener('click', function(){

    let item = document.createElement('li');
    let deleteBtn = document.createElement('button');

    item.innerText = inp.value;
    deleteBtn.innerText = "delete";
    deleteBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(deleteBtn);

    inp.value = "";
})

ul.addEventListener('click', function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

//This should workd for existing list if add new value then it should not delete that value.
// let delbtns = document.querySelectorAll('.delete');
// for(delbtn of delbtns){
//     delbtn.addEventListener('click', function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

