let form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault();
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    let user = this.elements[0];//form.elements[0] both are same
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`hi, ${user.value}! your submitted pass is ${pass.value}`);
})