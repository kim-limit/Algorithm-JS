const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [a, b] = input.shift().split(" ").map(Number);
let c = Number(input[0]);

solution(a, b, c);

function solution(a, b, c) {
  let total = a * 60 + b + c;
  total %= 1440;

  let hour = parseInt(total / 60);
  let min = total % 60;

  console.log(hour, min);
}
