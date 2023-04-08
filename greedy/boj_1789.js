const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let s = parseInt(input[0]);

console.log(solution(s));

function solution(s) {
  let result = 0;
  let i = 0;

  while (result <= s) {
    result += ++i;
  }

  return i - 1;
}
