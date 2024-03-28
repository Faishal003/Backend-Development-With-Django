//object literal

const classInfo = {
    faishal: {
        grade: 'A+',
        city: "rajshahi",
    },

    ahmed: {
        grade: 'A',
        city: "dhaka",
    },

    emon: {
        grade: 'A-',
        city: "natore",
    }
}

console.log(classInfo.faishal.city)

//change value
classInfo.faishal.city = 'barisal';
console.log(classInfo.faishal.city);
console.log(classInfo);