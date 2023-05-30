const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input.shift();
let cup = [];
let dp = [];

for (let i = 0; i < n; i++) cup.push(Number(input[i]));

dp[0] = cup[0];
dp[1] = cup[1] + cup[0];
dp[2] = Math.max(cup[0] + cup[1], cup[1] + cup[2], cup[0] + cup[2]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 2], dp[i - 3] + cup[i - 1]) + cup[i];
  dp[i] = Math.max(dp[i], dp[i - 1]);
}

console.log(dp[n - 1]);
