import main from "../app.js";

export default function redirect() {
  console.log("Redirecting You to Main Option in 5 Seconds....");
  setTimeout(() => {
    main();
  }, 5000);
}

