const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input.shift());
let lines = [];
let dp = new Array(101).fill(1);
for (let i = 0; i < n; i++) lines.push(input[i].split(" ").map(Number));
lines.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    // 현재가 전보다 클 때
    if (lines[i][1] >= lines[j][1]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(n - dp.reduce((a, b) => Math.max(a, b)));
