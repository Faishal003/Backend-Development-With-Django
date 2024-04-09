//array method

//map function

let num = [1,2,3,4,5];

let double = num.map((el)=>{
    return(el*2);
});

let student = [
    {
    name: 'faishal ahmed emon',
    marks: 45,
}, 
{
    name: 'alex',
    marks: 50,

}, 
{
    name: 'xender',
    marks: 49,
},
];

let gpa = student.map((emon)=>{ //parameter should be any of these either its el or emon
    return emon.marks / 10;
})

//filter function

let number = [1,2,3,4,5,11,2,3,4,2,4,5,6,745,7,7,5,43,44,48];

let evenOrOdd = number.filter((el)=>{
    return el % 2 != 0; //use as many condition you want
})

//reduce method

let nums = [1,2,3,4,5,6,7,8,9,10,10];

let result = nums.reduce((res, el)=> {
    console.log(res);
    return res + el;
})

//maximum in array
let  numbers = [1,4,3,2,1,4,6,7,5,4];

let max = numbers.reduce((max, el)=>{
    if(max > el){
        return max;
    }
    else{
        return el;
    }
})


//spread with Array literals

let arr = [1,2,3,4,5,6];

let newarr = [...arr];

console.log(newarr)


let char = [...'faishal ahmed emon'];
console.log(char)

let even = [2,4,6,8];
let odd = [1,3,5,7];

let merge = [...even, ...odd];

console.log (merge)


//spread with object literals

const students = {
    name: "faishal ahmed emon",
    email: 'emon@gmail.com',
}

let copy_students = {...students, country: "Bangladesh"}
console.log(copy_students)

let arrr = [2,3,4,5,6,7];
let obj1 = {...arrr}
console.log(obj1)

let charter = {..."hello"}
console.log(charter)
