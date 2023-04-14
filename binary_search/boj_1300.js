const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let k = Number(input[1]);

solution(n, k);

function solution(n, k) {
  // n x n, K개
  // mid는 k번째 값, total은 그거보다 작은 애들의 수
  let start = 1;
  let end = n * n;
  let mid, total, result;
  while (start <= end) {
    total = 0;
    mid = parseInt((start + end) / 2);
    for (let i = 1; i <= n; i++) {
      total += Math.min(parseInt(mid / i), n);
    }
    if (total < k) {
      start = mid + 1;
    } else {
      result = mid;
      end = mid - 1;
    }
  }
  console.log(result);
}
