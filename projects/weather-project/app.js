import axios from "axios"
import readline from "readline-sync"

let apiKey = "95e5a286b57923df4b35859013db8218"

let cityName=readline.question("Enter City Name : ")

let link = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);

link
    .then((response)=>{
        let final=response.data
        console.log(`\n1.City Name : ${final.name}`)
        console.log(`\n2.Temp in Celsius : ${((final.main.temp)-273.15).toPrecision(3)}`)
        console.log(`\n3.Temp in Fahrenheit : ${(((final.main.temp) - 273.15) * 9/5 + 32).toPrecision(4)}`)
        console.log(`\n4.Humidity : ${final.main.humidity}`)
        console.log(`\n5.Lattitude is ${(final.coord.lat).toPrecision(4)} and longitude is ${(final.coord.lon).toPrecision(4)}`)
    })
    .catch((error)=>{
        console.log("Error")
    })
