const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input.shift());
let k = Number(input.shift());
let graph = [];
let visited = new Array(n + 1).fill(false);
let count = 0;
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 0; i < k; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function dfs(v) {
  visited[v] = true;
  count++;
  for (let i of graph[v]) {
    if (visited[i]) continue;
    dfs(i);
  }
}

dfs(1);
console.log(count - 1);
