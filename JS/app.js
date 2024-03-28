const student = {
    name: "Steve Smith",
    age: 32,
    content: "this is my first post @firstPost",
    likes: 130,
    repost: 30,
    tags: ['@funnyPost', '@funnyCommunity'],
}

console.log(student.name);
console.log(student.content);

//now add a variable and access that variable with .
let firstname = "name";
console.log(student.firstname); //cannot access with dot
console.log(student[firstname]); //now it should be accessed.