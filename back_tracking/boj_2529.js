const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let k = Number(input[0]);
let arr = input[1].split(" ");
let visited = [];
let selected = [];
let max_result = "";
let min_result = "";
for (let i = 0; i < 10; i++) visited.push(false);

function dfs(depth) {
  if (k + 1 === depth) {
    for (let i = 0; i < k; i++) {
      if (arr[i] === ">") {
        if (selected[i] <= selected[i + 1]) return;
      } else {
        if (selected[i] >= selected[i + 1]) return;
      }
    }
    if (min_result === "") min_result = selected.join("");
    max_result = selected.join("");
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(0);

console.log(max_result);
console.log(min_result);
