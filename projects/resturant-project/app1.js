import readline from "readline-sync"

let gst = 0.16
let food1 = 25
let food2 = 14
let food3 = 45
let food4 = 8
const food_items = ["1.Pizza \t $25",
        "2.Burger \t $14",
        "3.Pasta \t $45",
        "4.Fries \t  $8"
    ]
function visit_again() {
    console.log("\n~~~~~~~~~~~~~~VISIT AGAIN~~~~~~~~~~~~~")
}
function main() {
    console.clear()
    console.log("*******************************")
    console.log("     Welcome To Pizza Hut ")
    console.log("\n*******************************")
    console.log("\n~~~~~~Our Menu~~~~~~")
    food_items.forEach((food) => console.log(food))
    console.log("***********************")
}
main()
let question = readline.question("\nWhat Is Your Favourite Dish : ")
function main1() {
    switch (question) {
        case ("Pizza"): {
            console.log("\nA Very Good Choice Sire!!!")
            console.log(`\nYour ${food_items[0].slice(2, 8)}will be ${(food1 + food1 * gst).toPrecision(2)} With A GST of 16% `)
            visit_again()
            break;
        }
        case "Burger": {
            console.log("\nA Very Good Choice Sire!!!")
            console.log(`\nYour ${food_items[1].slice(2, 9)}will be ${(food2 + food2 * gst).toPrecision(2)} With A GST of 16% `)
            visit_again()
            break;
        }
        case "Pasta": {
            console.log("\nA Very Good Choice Sire!!!")
            console.log(`\nYour ${food_items[2].slice(2, 8)}will be ${(food3 + food3 * gst).toPrecision(2)} With A GST of 16% `)
            visit_again()
            break;
        }
        case "Fries": {
            console.log("\nA Very Good Choice Sire!!!")
            console.log(`\nYour ${food_items[3].slice(2, 8)}will be ${(food4 + food4 * gst).toPrecision(2)} With A GST of 16% `)
            visit_again()
            break;
        }
        default: {
            console.log("\nThe Food Item You Have Entered Is Not Available.")
            
        }
    }
}
setTimeout(main1,2000)