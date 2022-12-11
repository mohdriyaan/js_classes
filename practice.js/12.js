// JS Program to check whether the number is Largest or not

function largest(a,b,c){
    if(a>b&&c){
        console.log(`${a} is largest`)
    }else if(b>c){
        console.log(`${b} is largest`)
    }else{
        console.log(`${c} is largest`)
    }
}

largest(10,2,5)
largest(4,8,2)
largest(11,15,20)
