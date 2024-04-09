//destructuring method

let names = ['emon', 'ahmed', 'mahmudul', 'faishal'];

// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerUp = names[2];

//we can reduce those terms

// let[winner, runnerup, secondRunnerUp] = names;

//if array length is high ans store all of that with winner and runnerup we can use mix up like use rest method and destructuring
let [winner, runnerup, ...others] = names;

//object literals for destructuring

const student = {
    name: 'fasihal ahmed emon',
    age: 24,
    education: 'B.Sc in Engineering',
    subject: 'IRE',
}

let {education, subject, ...other} = student; //rest of the key value should stored in ...other variable

//we can also give a variable on that
let{name: user, age: dateOfBirth, place = 'Dhaka', ...othersall} = student;
