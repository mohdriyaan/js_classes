// Destructuring Assignment In Objects

const person={
    name:"Mohammed Riyaan",
    age:21,
    email:"mohammedrayaan1@gmail.com"

}
const person1={
    name:"Kratos",
    age:200000,
    email:"kratos1@gmail.com"
}
var {name,age}=person;
// let name=person.name
// let age=person.age
console.log(name,age)
var {name,age}=person1
console.log(name,age)


