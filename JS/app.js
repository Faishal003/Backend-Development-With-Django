function greetings() {
    console.log(`hello! welcome here.`)
}

function userName() {
    console.log("Faishal Ahmed Emon");
    greetings();
}

userName();

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
}

rollDice()

function printName(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

printName("emon", 24);

function avgThree(a, b, c) {
    console.log((a + b + c) / 3);
}

avgThree(1, 2, 3);

//print table using function

function tableNumber(n) {
    for (i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}
tableNumber(3);