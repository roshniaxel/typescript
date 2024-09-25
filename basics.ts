//Assigning Types And Type Inference
// let a: number = 4;
// let name: string = "Alice";
// let isStudent: boolean = true;
// console.log(a)
// console.log(name)
// console.log(isStudent)


// function multiply(a: number, b: number): number {
//   return a * b;
// }

// let result: number = multiply(5, 3);
// console.log(result)


// Array Type
// let numbers: number[] = [1, 2, 3, 4, 5];
// let number1: Array<number> = [1, 2, 3, 4, 5];
// console.log(numbers)
// console.log(number1)

//Object Basics
// const person = {name: "Roshni", age: 30}
// console.log(person)

//
// const person: {name: string; age: number; isProgrammer?: boolean} = {
//   name: "Roshni",
//   age: 30,
// }
// person.isProgrammer = true
// console.log(person)

// Type and Interface
// interface Person {
//   name: string;
//   age: number;
//   isProgrammer?: boolean
//   friends: string[]
//   address: {
//     street: string
//   }
// }

// const  person: Person = {
//   name: "Roshni",
//   age: 30,
//   friends: [],
//   address: {
//     street: "Main st.",
//   }
// }

// Type
// type Person = {
//   name: string;
//   age: number;
//   isProgrammer?: boolean
//   friends: string[]
// }

// const person: Person = {
//   name:"Roshni",
//   age: 30,
//   friends: []
// }

// const person2: Person = {name: "Roshni", age:30, friends:["test", "test1"]}
// console.log(person2.name)


//Function
// function printPerson(person: { name: string, age?: number}) {
//   console.log(person.name);
// }

// // This will print an error
// printPerson({name: "Roshni", age: 30})

//Optional Parameters
// function printNameAndAge2(name: string, options?: { debugMode: boolean}) {
//   console.log(name, options || { debugMode: false }); 

// }

// printNameAndAge2("test");
// printNameAndAge2("test", {debugMode: true});

//Typing Variables As Functions
// function sumWithCallback(a: number, b:number, cb: (sum:number) => void) {
//   cb(a+b)
// }

// sumWithCallback(1, 2, (sum) => {
//   console.log(sum)
// })
// type PrintNameFunc = (name: string) => number
// function f(name: string) {
//   return 2
// }

// Unoins
// type Todo = {
//   name: string
//   status: "complete" | "incomplete"
// }

// type Person = {
//   name: string
//   age: number
// }

// type TodoPerson = Todo | Person
// const todo: Todo = {name:"Roshni", status: "complete"}
// console.log(todo)

//Intersections
// type Person = {
//     name: string
//     age: number
//   }


//   type Todo = {
//     complete: boolean
//   }
//   type PersonWithId = Person & Todo  & {id: string}
//   const person: PersonWithId = {id: "dgsd", name: "Roshni", age:30}
//   console.log(person)

//readyonly
// type test = {
//   readonly one: string
//   two: readonly number[]
// }

//keyof
// type Person = {
//     name: string
//     age: number
// }

// const age = getValue("age", {name:"Roshni", age: 30})
// function getValue(key: keyof Person, person: Person) {
//   return person[key]
// }

//typeof
// function sayHi(name: string) {
//   console.log(name)
// }

// type FuncType = typeof sayHi

//Pick and omit
// type User = {
//   id: string
//   name: string
//   age: number
//   address: string
// }
// type FormUser = Pick<User, "name" | "age">
// type FormUser = Omit<User, "id">

// Partial
// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// Partial
// const partialUser: Partial<User> = {
//   name: "Alice"
//   // 'age' and 'email' are optional here
// };
// console.log(partialUser)

// Required
// interface User {
//   name: string;
//   age?: number;  // Optional property
//   email?: string;
// }

//Required
// const requiredUser: Required<User> = {
//   name: "Bob",
//   age: 30,       // Now required
//   email: "bob@example.com"  // Now required
// };

// console.log(requiredUser)

// Type gaurd
// type Car = {
//   drive: () => void;
// };

// type Boat = {
//   sail: () => void;
// };

// function move(vehicle: Car | Boat) {
//   if ("drive" in vehicle) {
//     vehicle.drive(); // TypeScript knows `vehicle` is a Car
//   } else {
//     vehicle.sail(); // TypeScript knows `vehicle` is a Boat
//   }
// }

// const car: Car = { drive: () => console.log("Driving...") };
// const boat: Boat = { sail: () => console.log("Sailing...") };

// move(car); // Driving...
// move(boat); // Sailing...


//Never type

// type Shape = 
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; side: number };

// function getArea(shape: Shape): number {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.side ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;
//       throw new Error(`Unhandled shape kind: ${_exhaustiveCheck}`);
//   }
// }



//statifies
// type User = {
//   id: string | number
//   name: string
//   age: number
// }

// const user = {
//   id: 1,
//   name: "Roshni",
//   age: 30
// } satisfies User

// const newId = user.id + 1
// console.log(newId)