import readline from "readline-sync";
import main from "../app.js";
import redirect from "./redirect.js";
export default function ask() {
  let option = ["For Exit", "Main Menu"];
  option.forEach((x, index) => {
    console.log(`${index} For ${x}`);
  });
  let ask = readline.question("Select Option : ");
  if (ask == 0) {
    console.log("Thank You For Using Our Tasky App");
    return;
  } else {
    redirect();
  }
}
