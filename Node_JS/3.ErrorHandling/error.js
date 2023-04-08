const error = new Error("Something went wrong !!!")
// console.log(error)
// console.log(error.message)
// throw new Error("There is a new Error ")
import CustomError from "./CustomError.js"
throw new CustomError("This is a Custom Error . ")
