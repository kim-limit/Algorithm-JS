const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);

console.log(solution(a, b));

function solution(a, b) {
  let result = 1;
  while (b > 0) {
    if (a == b) return result;
    if (b % 2 == 0) {
      b = parseInt(b / 2);
      result += 1;
    } else if (b % 10 == 1) {
      b = parseInt(b / 10);
      result += 1;
    } else {
      return -1;
    }
  }
  return -1;
}
