const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let woods = input[1].split(" ").map(Number);

solution(n, m, woods);

function solution(n, m, woods) {
  let start = 0; // 시작점
  let end = woods.reduce((a, b) => Math.max(a, b)); // 끝점
  let mid, result, total;
  while (start <= end) {
    total = 0;
    mid = parseInt((start + end) / 2);

    for (let wood of woods) {
      // 잘린 나무 구하기
      if (wood > mid) total += wood - mid;
    }
    if (total >= m) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(result);
}
