// export function writePerson(person){
//     console.log(`first : ${person.first} , last : ${person.last} , age : ${age} `);
// }

export function writePerson(person) {
  console.log(
    `first : ${person.firstName} , last : ${person.lastName} , age : ${person.age} `
  );
}

// --- numeric sum : add two numbers
export function sum(n1, n2) {
  return n1 + n2;
}

// firstName , lastName, age , avgGrade
export function writeStudent(student) {
  console.log(
    `first : ${student.firstName} , last : ${student.lastName} , age : ${student.age} , avg : ${student.avgGrade}`
  );
}

export function computeStudentsAvg(students) {
  let sum = 0,
    count = 0;

  students.forEach((student) => {
    sum += student.avgGrade;
    count++;
  });

  return sum / count;
}
