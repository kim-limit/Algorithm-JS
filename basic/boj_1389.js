const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" "); // '/dev/stdin'

solution(+input[0], +input[1]);

function solution(a, b) {
  console.log(a + b);
}
