// https://api.chucknorris.io/
// try,catch,finally,throw,throws
// fetch() brings data to the client from the server

// fetch('https://api.chucknorris.io/jokes/random')
//     .then( (response) => {
//         // console.log("API: " , response.json());
//         return response.json();
//     })
//     .then((data) => {
//         // console.log("Data is :", data);
//         var joke = data.value;
//         console.log("JOKE :",joke);
//     })
//     .catch();
/*

   Exception handling

   Any error is an exception

   try,catch,finally,throw

    Errors can be
        1)Syntax Errors
        2)Run time errors


        try
            certain code
            we ask the computer to try the code
            if there is a error?
            we request the computer not to terminate
            our program but if there is a error please
            send it to catch block and tell
            what is problem is and continue the rest of the code.

        catch

        Syntax Of try catch
        try{
            // main code is inside try block
            ) catch(error){
                // the catch blocks the error with giving you the catch statements
            }
        }
    */

// let a=1,b=2
// try{
//     console.log(a+b)
//     console.log(c)
// }catch(error){
//     console.log("Error Message :" , error)
// }

