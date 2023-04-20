const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let result = 0;
let queens = [];

function check(x, y) {
  for (let [a, b] of queens) {
    // 대각
    if (Math.abs(x - a) === Math.abs(y - b)) return false;
    // 세로
    if (b === y || a === x) return false;
  }
  return true;
}

function dfs(depth) {
  if (depth === n) {
    // 다 끝 났을 떄
    result += 1;
  }
  for (let i = 0; i < n; i++) {
    // 여기 가능 한지 체크
    if (check(depth, i)) {
      // 현재 칸에 퀸 놓음
      queens.push([depth, i]);
      // 다음 칸 체크
      dfs(depth + 1);
      // 현재 칸에서 퀸 뺌
      queens.pop();
    }
  }
}

dfs(0);
console.log(result);
