import path from "path"
import fs from "fs"

const filePath= "/home/riyaan/NodeJS/3.ErrorHandling/files/sample.txt"

// dirname
console.log(path.dirname(filePath))
// basename
console.log(path.basename(filePath))
// extension
console.log(path.extname(filePath))

// Joining the path

const samplePath = "sample.txt"
console.log(path.join(path.dirname(filePath),samplePath))

// fs methods
// console.log(fs)

// Reading From A File
fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err){
        console.log("Something Wrong has ocurred . ")
    }else{
        console.log(data)
    }
})

// Writing into a file 
const file = "./files/1.txt"
const content = "I love Node JS "
fs.writeFile(file,content,(err,data)=>{
    if(err){
        console.log("Error has occured")
    }else{
        console.log("Write operation has completed .")
    }
})

// Renaming the File
fs.rename(filePath,samplePath,(err,data)=>{
    if(err){
        console.log("Error!!")
    }else{
        console.log("Completed")
    }
})