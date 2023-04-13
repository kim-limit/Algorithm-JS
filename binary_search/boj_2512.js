const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input.shift());
let money = input[0].split(" ").map(Number);
let total = Number(input[1]);

solution(n, money, total);

function solution(n, arr, total) {
  let start = 1;
  let end = arr.reduce((a, b) => Math.max(a, b));
  let tmp = 0; // 전체 합
  let result;
  let mid;

  while (start <= end) {
    tmp = 0;
    mid = parseInt((start + end) / 2);
    for (i of arr) tmp += Math.min(i, mid); // 전체 합 구하는 식
    if (total < tmp) end = mid - 1; // 전체 예산보다 크면
    else {
      result = mid;
      start = mid + 1;
    }
  }
  console.log(result);
}
