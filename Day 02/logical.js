// Logical > True and False
//            1        0
// Logical AND &&
// Logical OR  ||
// Logical NOT !

/* AND &&
A    B      A&&B
F    F      F
F    T      F
T    F      F
T    T      T


*/

/*
Logical OR ||
F = 0
T = 1
A    B   A || B
F    F     F
F    T     T
T    F     T
T    T     T

// Logical NOT

True ==> False 
False ==> False

!True ==> False
!False ==> True




*/
// let zaid;
// console.log('Zaid ku samaj me aya');

let a = 10;
let b = 5;
console.log(a > b && b > a);
//           True  &&  False

console.log(a > b || b > a);
//         True   || True

let c = false
console.log(!c);
