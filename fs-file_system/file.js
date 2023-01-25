// NodeJS File Systems (FS)

// 1. No need of any npm package.
// 2. With these you can write , read , update , delete any files and folders.
// File Systems are all promises. Which means they are asynchronous.

import fs from "fs" //Built in packages from nodejs
// Create a file using fs
let fileName="writefile.txt"
let data="I am Riyaan.Student Of LIET."
// Syntax:-fs.(what you want to do)
fs.writeFile(fileName,data,(err,output)=>{ //data will be inside the fileName.
    if(err){
        console.log(err)
    }else{
        console.log("File Created Successfully")
    }
})
// Errors can be if the space is full , the file can't be created.

// Reading only file
fs.readFile(fileName,"utf-8",(error,output)=>{
    if(error){
        console.log(error)
    }else{
        console.log(output)
    }
})
// The Buffer You Get is Hexadecimal Value of ASCII Decimal. So for that we use utf-8

//Deleting The File
// fs.unlink(fileName,(err,output)=>{
    // if(err){
        // console.log(err)
    // }else{
        // console.log("File Deleted Succesfully")
    // }
// })