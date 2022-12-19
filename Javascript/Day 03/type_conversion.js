// Type Conversions
// Changing From One DataType To Another
//
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefiend

// JavaScript ...So there was bug and issue in JS
// NULL is Data Object
// // Anything to String
// let a1 = "String" + ""; // DataType String
// let a2 = 100 + ""; // Number
// let a3 = true + ""; // Boolean
// let a4 = null + ""; // Object
// let a5 = undefined + "" // undefined

// let a1 = "String" + ""; // DataType String
// let a2 = String(100); // Number
// let a3 = String(true); // Boolean
// let a4 = String(null); // Object
// let a5 = String(undefined) // undefined
// console.log(typeof a1);
// console.log(typeof a2);
// console.log(typeof a3);
// console.log(typeof a4);
// console.log(typeof a5);

// // Anything Number

let a1 = 0; // DataType String
let a2 = 100; // Number //
let a3 = true; // Boolean
let a4 = null; // Object
let a5 = undefined; // undefined

// Number() or +value

console.log(Number(a1));
console.log(+a3);

console.log(Number(a5));



// console.log(typeof a1);


console.log(Boolean(a1));

// -Infinity ------ 0 -------- +Infinity
// True            False          True

// "" => 0
// "  hth" ==> 1 

// String + === Concate

// 

let result;
result = Number('hello');
console.log(result); // NaN

let b1 = 5;
let c1 = "5"

console.log(b1 === c1);
