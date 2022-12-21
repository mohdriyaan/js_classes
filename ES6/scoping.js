// Scoping
/*

1.Block Scope
2.Function Scope
3.Global Scope
*/

// 1. Block Scope
{
    var a=10
    // console.log(a)
}
console.log(a) // You can use a out of the block

{
    let b=10
    console.log(b)
}
// console.log(b) //You can use only in block

{
    const c=10
    console.log(c)
}
// console.log(c) //You can use only in block