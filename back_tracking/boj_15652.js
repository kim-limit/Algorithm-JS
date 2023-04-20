const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];
let result = "";

function dfs(depth, start) {
  if (depth == m) {
    for (let x of selected) result += x + " ";
    result += "\n";
    return;
  }
  for (let i = start; i < n; i++) {
    selected.push(arr[i]);
    dfs(depth + 1, i);
    selected.pop();
  }
}

solution(n, m);
function solution(n, m) {
  dfs(0, 0);
  console.log(result);
}
