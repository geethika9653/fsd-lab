
let username: string="Ramya";
let userAge: number=20;
let isIndian: boolean=true;
console.log("username datatype is: "+typeof username);
console.log("userAge datatype is: "+typeof userAge);
console.log("isIndian datatype is: "+typeof isIndian);

function display(name: string, age: number, isIndian: boolean){
    console.log(`Name: ${name}`);
    console.log(`age: ${age}`);
    console.log(`isIndian: ${isIndian ?"Yes": "No"}`);
}

display(username,userAge,isIndian);