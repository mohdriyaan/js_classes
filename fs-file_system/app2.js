// Creating The File
import fs from "fs/promises"

async function main(){
    console.log("File:")
    try{
        let fileName="hello.txt"
        let data="Hi I am Riyaan"
        // creating the file.
        let file_write=await fs.writeFile(fileName,data)
        console.log("File Created Succesfully")
        // reading the file
        let read_file=await fs.readFile(fileName,"utf-8")
        console.log("The data in the file is : ",read_file)
        // deleting the file
        await fs.unlink(fileName)
        console.log("File Deleted Successfully")
    }
    catch(error){
        console.log(error)
    }
};
main()


