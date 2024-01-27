// Primitives : number, string, boolean
// more complex types : array, objects
// function types,, parameters

let age: number = 1;

let username: string = "hardik gaur";

console.log(username);

let bool: boolean = true;

// complex types

let hobbies: string[]; // array of strings

hobbies = ["1", "ag"];

// type definition of object in typescript
let person: {
  name: string;
  age: number;
};

person = {
  name: "Hardik",
  age: 24,
};

/// array of objects

let people: {
  name: String;
  age: number;
}[];

// Type inference : ts automatically tries to find out the type of the variables

let course = "React - The complete Guide";

// for the situation where more than one type is allowed , we use a feature of 'Union types'

let subject: string | number = "React";

subject = 123; // string and number ore allowed

////// -----------  Type Alias

// to avoid type duplication we can define and alias for a type definition

type Person = {
  name: string;
  age: number;
};

let person1: Person = {
  name: "Hardik",
  age: 23,
};

// --------- functions & types

// the function can return number or a string
// function add(a: number, b: number): number | string {
//   return a + b;
// }

// return type is inferred by the TS
function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

function print(a: any) {
  console.log(a);
}

print(10);

// --------- generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [...array, value];

  return newArray;
}
