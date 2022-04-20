import { writeStudent , computeStudentsAvg} from "./utils";

let student1 = { firstName: "Jim", lastName: "Carter", age: 33, avgGrade: 78 };
let student2 = { firstName: "Mike", lastName: "Tyson", age: 45, avgGrade: 40 };
writeStudent(student1);

let students = [student1,student2]
console.log(computeStudentsAvg(students));