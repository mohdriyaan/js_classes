import express from "express"

const Port = 5000

const app = express()

app.get("/download",(req,res)=>{
    res.download("./file.txt")
})
// Transfers the file at path as an “attachment”. Typically, browsers will prompt the user for download.

app.get("/end",(req,res)=>{
    res.download("./file.txt") 
    res.status(404).end() //ends the download process
})
// Ends the response process

app.get("/json",(req,res)=>{
    res.json({"msg":"This is json response"})
})
// Sends a JSON response.

app.get("/sendstatus",(req,res)=>{
    res.sendStatus(500)
})
// Sets the response HTTP status code to statusCode and sends the registered status message as the text response body.

app.get("/status",(req,res)=>{
    res.status(400).send('Bad Request')
})
// Sets the HTTP status for the response.

app.listen(Port,()=>{
    console.log(`Server Listening At Port Number ${Port}`)
})

