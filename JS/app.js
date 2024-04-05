//Write a JavaScript function that returns array elements larger than a number.

let arr = [2, 10, 4, 6, 89, 32, 44, 5];
let num = 9;

function largerarr(arr, num) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}

largerarr(arr, num);

//Write a JavaScript function to extract unique characters from a string.Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str = 'abcdabcdefgggh';

function uniquechar(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        // let current = str[i];
        if (result.indexOf(str[i]) == -1) {
            result += str[i];
        }
    }
    // console.log(result);
    return result;
}

console.log(uniquechar(str));


// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.Example : country = ["Australia", "Germany", "United States of America"] output : "United States of America"

let countryName = ["Australia", "Germany", "United States of America"];

function longestCountry(countryName) {
    let result = 0;
    for (let i = 0; i < countryName.length; i++) {
        str = countryName[result].length; //australia
        currentIdx = countryName[i].length; //australia
        if (currentIdx > str) {
            str = i;
        }
    }
    return countryName[str];
}

console.log(longestCountry(countryName));

//Write a JavaScript function to count the number of vowels in a String argument.

let strName = 'emon ahmed';

function countNum(strName) {
    count = 0;
    for (let i = 0; i < strName.length; i++) {
        if (strName[i] == 'a' || strName[i] == 'e' || strName[i] == 'i' || strName[i] == 'o' || strName[i] == 'u') {
            count++;
        }
    }
    return count;
}

console.log(countNum(strName));

//Qs5. Write a JavaScript function to generate a random number within a range (start, end).

let start = 100;
let end = 200;

function randomNum(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(randomNum(start, end));