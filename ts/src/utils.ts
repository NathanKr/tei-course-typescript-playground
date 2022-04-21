import axios, { AxiosError, AxiosResponse } from "axios";
import IStudent from "./IStudent";

export function writePerson(person: {
  firstName: string;
  lastName: string;
  age: number;
}) {
  console.log(
    `first : ${person.firstName} , last : ${person.lastName} , age : ${person.age} `
  );
}

// --- numeric sum : add two numbers
export function sum(n1: number, n2: number): number {
  return n1 + n2;
}

export const mul = (n1: number, n2: number): number => {
  return n1 * n2;
};

export function writeStudent(student: IStudent) {
  console.log(
    `first : ${student.firstName} , last : ${student.lastName} , age : ${student.age} , avg : ${student.avgGrade}`
  );
}

export function computeStudentsAvg(students : IStudent[]) : number{
  let sum=0,count=0;

  students.forEach(student => {
    sum += student.avgGrade;
    count++;
  });

  return sum/count;
}

export function printReditDataToConsole() {
  let url = 'https://www.reddit.com/r/typescript.json'
  axios
    .get(url)
    .then((res : AxiosResponse) => {
      const root = res.data
      root.data.children.forEach((child : any) => {
        console.log(child.data.title);
      });
    })
    .catch((err : AxiosError) => {
      console.error(err);
    });
}