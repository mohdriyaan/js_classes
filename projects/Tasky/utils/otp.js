export default function otp(len) {
  let arr = [];
  let random;
  let otpJoin;
  for (let i = 0; i < len; i++) {
    random = Math.floor(Math.random() * 9);
    arr.push(random);
    otpJoin = arr.join("");
  }
  return +otpJoin;
}
