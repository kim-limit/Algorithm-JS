const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m, h] = input.shift().split(" ").map(Number);
let person = [];
for (let i = 0; i < n; i++) {
  person.push(input[i].split(" ").map(Number));
}

let dp = new Array(h + 1).fill(0);
dp[0] = 1;
for (let i = 0; i < n; i++) {
  let tmp = [];
  for (let j = 0; j < person[i].length; j++) {
    for (let k = 0; k < h + 1; k++) {
      // 이전에 쌓았으면
      if (dp[k] > 0 && k + person[i][j] <= h) {
        // [쌓을 수 있는 값, 어떤 블록 사용했는지]
        tmp.push([k + person[i][j], dp[k]]);
      }
    }
  }

  for ([index, value] of tmp) {
    dp[index] = (value + dp[index]) % 10007;
  }
}

console.log(dp[h]);
