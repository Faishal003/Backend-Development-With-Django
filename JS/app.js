let arr = [1, 2, 3, 4, 5, 6]

const arrayAverage = (arr) => {
    let result = 0;
    for (i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}

console.log(arrayAverage(arr));


//second question

const Even = (n) => {
    if (n % 2 == 0) {
        console.log("It's an even number.");
    } else {
        console.log("It's an odd number");
    }
}

console.log(Even(6))