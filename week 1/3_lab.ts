
let value: any= 20;
value= "Ramya";
value= false;

let abc: unknown=20;
if(typeof abc=== "string"){
    console.log("Iam from Aiml-Branch");
}

function studentName(name: string): void{
    console.log("Students name is "+name);
}
let fullname: string= "Ramya";
studentName(fullname);