//guess the movie

let favourite = "The Shawshank Redemption";
let guess = prompt("What is my favourite movie?");

while ((guess != favourite) && (guess != "exit")) {
    console.log("Wrong guess. Try again");
    guess = prompt("What is my favourite movie?");
}
if (guess == favourite) {
    console.log("Congrats! You guessed it right.");
}