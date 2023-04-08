import express from "express"

const PORT = 5000;

const app = express()

app.use(express.json())
app.post("/:id",(req,res)=>{
    res.send(req.body)
    console.log(req.body)
    // Contains key-value pairs of data submitted in the request body. By default, it is undefined, and if the client writes the data in 
    // the body then that data is returned.
    // console.log(req.host)
    console.log(req.hostname)
    // Contains the hostname derived from the Host HTTP header.
    console.log(req.ip)
    // Contains the remote IP address of the request.
    console.log(req.method)
    // Contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.
    console.log(req.originalUrl)
    // This property is much like req.url; however, it retains the original request URL, allowing you to rewrite req.url freely for internal routing purposes.
    console.log(req.params)
    // This property is an object containing properties mapped to the named route “parameters”. For example, 
    // if you have the route /user/:id, then the “id” property is available as req.params.id. This object defaults to {}.
    console.log(req.path)
    // Contains the path part of the request URL.
    console.log(req.query)
    // This property is an object containing a property for each query string parameter in the route. 
    // When query parser is set to disabled, it is an empty object {}, otherwise it is the result of the configured query parser.

})

app.listen(PORT,()=>{
    console.log(`Server Listening At Port Number ${PORT}`)
})
