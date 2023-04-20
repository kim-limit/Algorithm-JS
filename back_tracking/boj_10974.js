const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let result = "";
function dfs(depth, arr, visited, selected) {
  // 순열 완성
  if (depth === arr.length) {
    for (let i of selected) {
      result += i + " ";
    }
    result += "\n";
  }
  for (let i of arr) {
    if (!visited[i]) {
      // 현재 만들고 있는 순열에 없음
      selected.push(i);
      visited[i] = true;
      dfs(depth + 1, arr, visited, selected);
      selected.pop();
      visited[i] = false;
    }
  }
}

solution(n);

function solution(n) {
  let arr = []; // 구해야 하는 순열의 수
  for (let i = 1; i < n + 1; i++) arr.push(i);
  let visited = new Array(n + 1).fill(false); // 방문 기록
  let selected = [];

  dfs(0, arr, visited, selected);
  console.log(result);
}
