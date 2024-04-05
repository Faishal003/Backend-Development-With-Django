//this with arrow function

const student = {
    name: 'faishal ahmed emon',
    marks: 50,
    prop: this, //global function

    getName: function () {
        console.log(this);
        return this.name;
    },

    getMarks: () => {
        console.log(this); //here this is  a parent scope not a calling object
        return this.marks;
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this);//student
        }, 2000)
    },

    getInfo2: function (){
        setTimeout(function() { //parent function is builtin function..
            console.log(this);
        }, 2000)
    },
}