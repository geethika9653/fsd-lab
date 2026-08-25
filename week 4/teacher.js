import { College } from "./college";
export class Teacher extends College {
    teacherName;
    constructor(name) {
        super();
        this.teacherName = name;
    }
    displayTeacher() {
        console.log("Teacher: " + this.teacherName);
        this.displayCollege();
    }
}
