import sendMail from "./app.js"
for(let i=0;i<100;i++){
    console.log(i)
}
sendMail( {subject:"Testing",
    to:"mohammedrayaan1@gmail.com,suhail13@gmail.com",
    body:"Hello I am from Tasky.My name is Riyaan."
})
