// console.log(Math.random())
// //It is an Built in Function
// //Which gives Number from 0 to 1 but less than 1 which means 0 to 0.99
// function randomNumber(num,range){
// for(let i=num;i<=range;i++){
//     console.log(Math.floor(Math.random()*range))
// }
// }

// randomNumber(3,5)

function randomNumber(min,max){
    console.log(Math.floor(Math.random() * (max-min+1)+min))
}
for(let i=1;i<=5;i++){
randomNumber(5,10)
}