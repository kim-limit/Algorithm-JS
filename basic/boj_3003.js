const fs = require("fs");
// let input = fs
//   .readFileSync("input.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

horses = [1, 1, 2, 2, 2, 8];

let result = solution(input);
console.log(...result);

function solution(input) {
  return horses.map((horse, index) => {
    return horse - input[index];
  });
}
