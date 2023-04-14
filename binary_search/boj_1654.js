const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [k, n] = input.shift().split(" ").map(Number);
let lines = [];
for (let i = 0; i < k; i++) {
  lines.push(Number(input[i]));
}

solution(k, n, lines);

function solution(k, n, lines) {
  let start = 1;
  let end = lines.reduce((a, b) => Math.max(a, b));
  let mid, result, total;

  while (start <= end) {
    total = 0;
    mid = parseInt((start + end) / 2);

    for (let line of lines) {
      total += parseInt(line / mid);
    }

    if (n <= total) {
      // 더 길게 잘라도댐
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(result);
}
