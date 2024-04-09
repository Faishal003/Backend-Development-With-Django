//Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let nums = [1,2,3,4,5];

let square = nums.map((num)=> num * num);
let sum = nums.reduce((acc, el)=> acc + el);

let average = sum / nums.length;

//Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

let num = [1,2,3,4,5,6];

let summation = num.map((n)=> n + 5);

//Qs3. Create a new array whose elements are in uppercase of words present in the original array

let names = ['thor','ironman','caprain','hulk','venom','antman'];

let upperCase = names.map((str)=> str.toUpperCase());

//Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((n)=> n * 2)
]

doubleAndReturnArgs([1,2,3,4], 5,6);


// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object

let obj1 = {
    name: "Tony stark",
    ages: 50,
}

let obj2 = {
    namea: "Captain America",
    age: 40,
}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}); 