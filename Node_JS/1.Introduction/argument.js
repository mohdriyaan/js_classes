import minimist from "minimist";

let argument=minimist(process.argv.slice(2))
console.log(argument.name)