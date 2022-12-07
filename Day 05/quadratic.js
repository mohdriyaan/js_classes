function quadratic(a,b,c){
    num1=-b+Math.sqrt(b*b-4*a*c)
    num2=-b-Math.sqrt(b*b-4*a*c)
    deno=2*a
    let x1 = num1 / deno
    let x2 = num2 / deno
    console.log(x1,x2)
}
quadratic(3,-5,2)