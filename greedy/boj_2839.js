const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input[0]);

console.log(solution(n));

function solution(n) {
  let result = 0;
  while (n >= 0) {
    if (n % 5 == 0) return (result += parseInt(n / 5)); // 5로 나눠지면 5로 나눈값
    n -= 3;
    result += 1;
  }
  return -1;
}
