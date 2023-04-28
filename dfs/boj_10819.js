const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function dfs(depth) {
  if (depth === n) {
    let tmp = 0;
    for (let i = 0; i < n - 1; i++) {
      tmp += Math.abs(selected[i] - selected[i + 1]);
    }
    result = Math.max(result, tmp);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(num[i]);
      dfs(depth + 1);
      visited[i] = false;
      selected.pop();
    }
  }
}

let n = Number(input[0]);
let num = input[1].split(" ").map(Number);
visited = new Array(n).fill(false);
let selected = [];
let result = -1;
dfs(0);
console.log(result);
