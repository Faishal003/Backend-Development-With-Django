//guessing game

const max = prompt("Tell the guessing game range");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt(`guess any number between 1 to ${max}`);

while (true) {
    if (guess == 'exit') {
        console.log("You just logged out of the game");
        break;
    }

    if (guess == random) {
        console.log("guess matched", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint: Your number is too small. Please try again");
    } else {
        guess = prompt("hint: Your number is too large. Please try again.")
    }
}