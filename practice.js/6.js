// JS Program for quadratic equation

function quadratic(a,b,c){
    let x1 = -b + Math.sqrt(b*b-4*a*c)
    let x2 = -b - Math.sqrt(b*b-4*a*c)
    let y=2*a
    console.log(x1/y , x2/y)
    
}
quadratic(1,5,6)
quadratic(1,5,-14)
