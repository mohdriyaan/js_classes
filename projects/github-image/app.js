import readline from "readline-sync";
import axios from "axios";
import fs from "fs";
import terminalImg from "terminal-image"
async function main(){
  console.clear()
  let userName = readline.question("Enter Github UserName : ");
  let fetch_data=await axios.get(`https://api.github.com/users/${userName}`)
  try{
    let image = fetch_data.data.avatar_url
    console.log(image)
    let image1=await axios.get(image, {responseType:"stream"})
    try{
        image1.data.pipe(fs.createWriteStream(`${userName}.png`))
        // console.log(terminalImg.file(`${userName}.png`))
    }
    catch{
        console.log("Error in coverting of image")
    }
  }
  catch{
    console.log("Error")
  }
}
main()
   