const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i < n + 1; i++) arr.push(i);
let selected = [];
let answer = "";

function dfs(depth, n, m) {
  if (depth === m) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < n; i++) {
    selected.push(arr[i]);
    dfs(depth + 1, n, m);
    selected.pop();
  }
}

solution(n, m);
function solution(n, m) {
  dfs(0, n, m);
  console.log(answer);
}
