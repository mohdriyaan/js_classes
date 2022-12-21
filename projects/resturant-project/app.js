import readline from "readline-sync"
import color from "cli-color"

function main(){
    const red=color.xterm(1);
    const blue=color.xterm(45);
    const orange=color.xterm(202);
    const yellow=color.xterm(11);
    const pink=color.xterm(13);

    console.clear()
    console.log(red("********************************************* \n"))
    console.log(blue("          Welcome To The Resturant \n           "))
    
    console.log(red("********************************************* \n"))

    console.log(yellow("********OUR MENU*********"))
    let gst = 0.18
    let food1=320
    let food2=150
    let food3=120
    let food4=210
    console.log(orange(`1. ButterChicken : rs.${food1}\n2. Biryani : rs.${food2} \n3. Shawarma : rs.${food3}\n4. Mandi : rs.${food4} `))
    let ask = readline.question(pink("\nWhat Is Your Favorite Dish : "))
    if(ask=="ButterChicken"||ask=="1"){
        console.log(`The amount with 18% GST will be : ${(food1+food1*gst).toPrecision(5)}`)
    }else if(ask=="Biryani"||ask=="2"){
        console.log(`The amount with 18% GST will be : ${(food2+food2*gst).toPrecision(5)}`) 
    }else if(ask=="Shawarma"||ask=="3"){
        console.log(`The amount with 18% GST will be : ${(food3+food3*gst).toPrecision(5)}`)
    }else if(ask=="Mandi"||ask=="4"){
        console.log(`The amount with 18% GST will be : ${(food4+food4*gst).toPrecision(5)}`)
    }
    else{
        console.log("The Item You Said Is Not In Our Menu.......")
    }
    console.log(blue("\n\n************VISIT AGAIN*************"))
    
}
main()
