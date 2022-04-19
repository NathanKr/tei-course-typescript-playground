export function writePerson(person: {
  firstName: string;
  lastName: string;
  age: number;
}) {
  console.log(
    // --- problems
    `first : ${person.firstName} , last : ${person.lastName} , age : ${person.age}`
  );
}
