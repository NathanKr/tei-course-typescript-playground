import IStudent from "./IStudent";
import { computeStudentsAvg, writeStudent } from "./utils";

let student1 : IStudent = {
    firstName: "Jim",
    lastName: "Carter",
    age: 68,
    height: 180,
    avgGrade: 89
}

let student2 : IStudent = {
    firstName: "Mike",
    lastName: "Tyson",
    age: 55,
    height:160,
    avgGrade: 40
}

let students = [student1,student2]
writeStudent(student1);

console.log(computeStudentsAvg(students));
