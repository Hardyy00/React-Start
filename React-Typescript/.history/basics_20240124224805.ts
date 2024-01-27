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
