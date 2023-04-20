const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let i = 0;
let visited = new Array(14).fill(false);
let selected = [];
let answer = "";

function dfs(depth, start, arr) {
  if (depth === 6) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
  }
  for (let x = start; x < arr.length; x++) {
    if (!visited[x]) {
      visited[x] = true;
      selected.push(arr[x]);
      dfs(depth + 1, x + 1, arr);
      visited[x] = false;
      selected.pop();
    }
  }
}

while (true) {
  let [k, ...arr] = input[i].split(" ").map(Number);
  if (k === 0) break;

  dfs(0, 0, arr);
  answer += "\n";
  i++;
}

console.log(answer);
