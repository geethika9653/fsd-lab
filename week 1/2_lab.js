"use strict";
let username = "Ramya";
let userAge = 20;
let isIndian = true;
console.log("username datatype is: " + typeof username);
console.log("userAge datatype is: " + typeof userAge);
console.log("isIndian datatype is: " + typeof isIndian);
function display(name, age, isIndian) {
    console.log(`Name: ${name}`);
    console.log(`age: ${age}`);
    console.log(`isIndian: ${isIndian ? "Yes" : "No"}`);
}
display(username, userAge, isIndian);
