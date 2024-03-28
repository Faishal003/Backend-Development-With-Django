//forof loops

let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

for (let fruit of fruits) {
    console.log(fruit);
}

//can be print string also

for (char of 'gigabyte') {
    console.log(char); //print out the individual characters
}

//nested forof loops

let heros = [['batman', 'superman'], ['spiderman', 'ironman'], ['wonderwoman', 'captainamerica']];

for (list of heros) {
    console.log(`outer loop: #{${list}}`);
    for (hero of list) {
        console.log(hero);
    }
}