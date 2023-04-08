// REPL :- Read Evaluate Print Loop
import repl from "repl"

const local = repl.start("The node console will start here \n$") // It will start the node console
local.on("exit",()=>{
    console.log("Exited REPL")
    process.exit()
})
