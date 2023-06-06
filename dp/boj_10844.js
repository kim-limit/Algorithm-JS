const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
let dp = [];
let result = 0;
for (let i = 0; i < n; i++) dp.push(new Array(10).fill(0));
for (let i = 1; i < 10; i++) dp[0][i] = 1;

for (let i = 1; i < n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][1];
    else if (j === 9) dp[i][j] = dp[i - 1][8];
    else {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
  }
}

for (let i = 0; i < 10; i++) {
  result += dp[n - 1][i];
  result %= 1000000000;
}

console.log(result % 1000000000);
