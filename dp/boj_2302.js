const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function fibo(x) {
  if (dp[x] != 0) return dp[x];
  dp[x] = fibo(x - 1) + fibo(x - 2);
  return dp[x];
}

let n = Number(input.shift());
let m = Number(input.shift());
let vip = [];
for (let i = 0; i < m; i++) vip.push(Number(input[i]));

let dp = new Array(41).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;

let prev = 0;
let result = 1;
for (let i = 0; i < vip.length; i++) {
  result *= fibo(vip[i] - prev - 1);
  prev = vip[i];
}
result *= fibo(n - prev);

console.log(result);
