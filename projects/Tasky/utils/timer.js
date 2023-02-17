export default function timer(sec) {
  return new Promise((resolve, reject) => {
    if (!sec) {
      reject("Time Needed");
    }
    setTimeout(() => {
      resolve;
    }, sec);
  });
}
