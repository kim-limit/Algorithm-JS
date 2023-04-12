const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
// 1부터 K-1까지 더하기

solution(n, k);

function solution(n, k) {
  let sum =
    (1 + k) * parseInt(k / 2) + (k % 2 == 0 ? 0 : parseInt((k + 1) / 2));
  if (sum > n) console.log(-1); // 못구함
  else {
    let diff = n - sum;
    if (diff % k == 0) console.log(k - 1);
    else console.log(k);
  }
}
