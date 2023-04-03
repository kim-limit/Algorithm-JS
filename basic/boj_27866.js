const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

solution(input[0], +input[1]);

function solution(s, i) {
  console.log(s[i - 1]);
}
