import fs from "fs"

let folderName="Riyaan Folder"

// Creating A folder
fs.mkdir(folderName,(err,output)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Folder Created Succesfully")
    }
})

// Deleting A Folder
// fs.rmdir(folderName,(err,output)=>{
    // if(err){
        // console.log(err)
    // }else{
        // console.log("Folder Deleted Succesfully")
    // }
// })

// Renaming the folder
fs.rename(folderName,"coding",(err,output)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Folder renamed successfully")
    }
})