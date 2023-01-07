import fetch_data from "axios"

fetch_data.get("https://www.boredapi.com/api/activity")
// console.log("Today's Activity is : " , api.data.activity)
// It cannot read the properties of activity so we use asynchronous operations to access it that are .then and .catch
    .then((response)=>{                 // .then handles the fullfilled promises
        console.log(`Today's Activity is to`,response.data.activity)
    })
    .catch((error)=>{                  // .catch handles the unfullfilled promises
        console.log("There is error")
    })
console.log("Why am i here ??")
// This is executed first because the code .then and .catch returns after the request is returnrd.


