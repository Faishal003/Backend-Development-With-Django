//todo list app
//main functionality is list, add, delete, and quit


let req = prompt("What would you like to do?");
let todo = [];

while (true) {
    if (req == "quit") {
        console.log("You quit the app");
        break;
    } else if (req == "list") {
        console.log("**********");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("**********");
    } else if (req == "add") {
        let task = prompt("Enter a new task");
        todo.push(task);
        console.log("Task added");
    } else if (req == "delete") {
        let idx = prompt("Enter the index of the task to delete");
        todo.splice(idx, 1);
        console.log("Task deleted");
    } else {
        console.log("You entered a wrong input");
    }

    req = prompt("What would you like to do?");
}