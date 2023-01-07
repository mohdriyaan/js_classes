// The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require("fs")
const readFiles = fs.readdirSync("./")
console.log(`Files are ${readFiles}`)