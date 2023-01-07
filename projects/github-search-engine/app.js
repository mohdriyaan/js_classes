import readline from "readline-sync"
import axios from "axios"
import color from "cli-color"
const red = color.xterm(1)
const blue=color.xterm(31)
const orange=color.xterm(166)
const green=color.xterm(79)
const pink=color.xterm(5)

// let ask= readline.question("Enter name : ")
// console.log(ask)
console.clear()
console.log(red("**********************************************"))
console.log(green("\n       Github-Search-Engine-Project          "))
console.log(red("\n**********************************************"))
let username=readline.question(blue("\nEnter username : "))
let data = axios.get(`https://api.github.com/users/${username}`)
// console.log(data)
data
    .then((response)=>{
        let final=response.data
        console.log(orange("\n*************************************************"))
        console.log(pink(`\n1. Name : ${final.name}`))
        if(final.twitter_username==null){
            console.log(pink(`\n2. Hello ${final.name} your twitter account is uncreated or you have no account!!`))
        }else{
            console.log(pink(`\n2. Twitter name : ${final.twitter_username}`))
        }
        console.log(pink(`\n3. Public Repos : ${final.public_repos}`))
        console.log(pink(`\n4. Public Gists : ${final.public_gists}`))
        console.log(pink(`\n5. Followers Are : ${final.followers} and Following Are : ${final.following}`))
        console.log(orange("\n**************************************************"))
    })
    .catch((error)=>{
        console.log("There is mistake in http link or in .then block")
    })