const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = []; // 순열을 구하고 싶은 숫자들
for (let i = 1; i <= n; i++) arr.push(i); // 초기화
let visited = new Array(n + 1).fill(false); // 방문 표시
let selected = []; // 현재 순열 구하고 있는 애들
let result = "";

function dfs(arr, depth) {
  if (depth == m) {
    for (let num of selected) {
      result += num + " ";
    }
    result += "\n";
  }
  for (let i of arr) {
    // 방문 안했을 때
    if (!visited[i]) {
      selected.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }
}

dfs(arr, 0);
console.log(result);
