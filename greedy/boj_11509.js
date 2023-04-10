const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input.shift());
let h = input[0].split(" ").map(Number);

solution(n, h);

function solution(n, h) {
  let arrow = new Array(1000001).fill(0);
  let result = 0;
  for (let i of h) {
    if (arrow[i] > 0) {
      // 화살 있음
      arrow[i] -= 1; // 맞고
      arrow[i - 1] += 1; // 한칸 내려감
    } else {
      // 화살 없음
      result += 1; // 쏘면
      arrow[i - 1] += 1; // 한칸 내려감
    }
  }
  console.log(result);
}
