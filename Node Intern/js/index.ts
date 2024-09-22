// let x = 2123;
// let xx = "2111";

// console.log(typeof x,typeof xx)

// let {data: x}={
//     data2:12321,
//     data:"hello",
//     dat:"true"
// }

// console.log(x)

// Type assertion to handle unused properties

// let { x: data } = {
//   data2: 12321,
//   data: "hello",
//   x: "true",
// } as { x: string };

// console.log(data)

// let value: unknown;

// value = 5;
// value = undefined;

// if (typeof value === "string") {
//   // console.log(value.toUpperCase()); // TypeScript knows `value` is a string here
// }


// function f2(msg: string): never {
//   throw new Error(msg);
// }

// f2("You Are Lose.")


// Define the type explicitly
// interface MyObject {
//     data: string;
//     any: string; // Use string here if `any` is supposed to be a string
//     data2: number;
// }

// // Destructure with the correct type
// let { any: x } = {
//   data2: 12321,
//   data: "hello",
//   any: "true",
// } as MyObject;

// console.log(x); // Logs: "true"

// class Foo {
//   private _bar: boolean;
//   constructor() {
//     this._bar = false;
//   }
//   get bar() {
//     return this._bar;
//   }

//   set bar(value) {
//     this._bar = value;
//   }
// }

// let x = new Foo();
// console.log(x.bar);

// x.bar = true;
// console.log(x.bar);

// export {}


// interface bake {
//   leave:string,
// }



// interface poit {
//   Value:string
// }


// function data<poit>(Value:poit[]):poit[]{
//   return Value;
// }

// console.log(data(["raj"]))


// function add(a: number, b: number): number;
// function add(a: string, b: string, c:string): string;

// function add(a: any, b: any,c?:any): any {
//   if(c){
//    return a + b + c
// }
//   return a + b;
// }

// console.log(add(1, 2)); // 3
// console.log(add("Hello", " World", " Raj"));



// type Name = `Mr. ${string}`;

// let names: Name = `Mr. Raj`;

interface User {
  name: string;
  age: number;
  location: string;
}

type UserKeys = keyof User;
const key: UserKeys = "location";
// console.log(User)