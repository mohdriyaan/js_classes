import env from "dotenv"
env.config()
console.log(process.env.NAME)
console.log(process.env.AGE)
console.log(process.env.PROFESSION)
console.log(`I am doing a course on ${process.env.COURSE}`)
