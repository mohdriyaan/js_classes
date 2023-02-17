import readline from "readline-sync";
import register from "./users/register.js";
import deleteUser from "./users/deleteuser.js";
import login from "./users/login.js";
import redirect from "./utils/redirect.js";
import forgetPassword from "./users/forgetPassword.js";
import insert from "./tasks/insert.js";
import update from "./tasks/update.js";
import deleteTodo from "./tasks/delete.js";
import getall from "./tasks/getall.js";

export default async function main() {
  try {
    console.clear();
    console.log("===========================================");
    console.log("================Tasky CLI =================");
    console.log("===========================================");

    let options = [
      "For Exit",
      "For Register",
      "For Login",
      "Add Task",
      "Edit Task",
      "Get All Task",
      "Delete Task",
      "Forget Password",
      "Delete User\n",
    ];

    options.forEach((value, index) => {
      console.log(`${index}. ${value}`);
    });

    let option = readline.questionInt("Enter Your Option : ");
    if (option < 0 || option > 8) {
      console.log("Invalid Option");
      redirect();
      return;
    }
    switch (option) {
      case 0:
        console.log("Thank You For Using It");
        break;
      case 1:
        await register();
        break;
      case 2:
        await login();
        break;
      case 3:
        await insert();
        break;
      case 4:
        await update();
        break;
      case 5:
        await getall();
        break;
      case 6:
        await deleteTodo();
        break;
      case 7:
        await forgetPassword();
        break;
      case 8:
        await deleteUser();
        break;
      default:
        console.log("Invalid Option");
        redirect();
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

main();
