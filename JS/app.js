//Strings Methods

//Trim Method
let str = "   Hello World   ";
console.log(str.trim());
let str1 = "   Hel  lo Wo  rld   ";//trim method only remove the spaces from the start and end of the string
console.log(str1.trim());


//uppercase and lowercase
let str2 = "Hello World";
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

//Indexof Method
let msg = "ilovecoding";
console.log(msg.indexOf("c"));

//multiple methods
let msg1 = "    Hello          ";
console.log(msg1.trim().toUpperCase());

//Slice Method
let msg2 = "explanation";
console.log(msg2.slice(4));
console.log(msg2.slice(4, 11));
console.log(msg2.slice(-1)); //length - 1 = 11 - 1 = 10
console.log(msg2.slice(-4, -1)); //length - 4 = 11 - 4 = 7 and length - 1 = 11 - 1 = 10
console.log(msg2.slice(7, 10)); //same as above

//Replace Method
let msg3 = "ilovecoding";
console.log(msg3.replace("coding", "programming"));
console.log(msg3.replace("i", "I")); //can not change the original string

//Repeat Method
let msg4 = "Hello";
console.log(msg4.repeat(3));