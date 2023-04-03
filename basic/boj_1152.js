const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

solution(input);

function solution(input) {
  console.log(input[0] === "" ? 0 : input.length);
}
