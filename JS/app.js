//higher order function

function multipleGreet(func, count) {//higher order function
    for (i = 1; i <= count; i++) {
        func();
    }
}

let greetings = function () {
    console.log("hi, welcome here!!");
    console.log("Hello")
}

multipleGreet(greetings, 2);



//higher order function (return)

// function odd(n) {
//     console.log(!(n % 2 == 0));
// }

// function even(n) {
//     console.log(n % 2 == 0);
// }

function evenOrOdd(request) {
    if (request == 'even') {
        let even = function even(n) {
            console.log(n % 2 == 0);
        }

        return even;

    } else if (request == 'odd') {
        function odd(n) {
            console.log(!(n % 2 == 0));
        }

        return odd;

    } else {
        console.log("please enter even or odd as an input");
    }
}

let request = 'odd';