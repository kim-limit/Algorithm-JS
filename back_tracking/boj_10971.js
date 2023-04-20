const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input.shift());
let path = [];
let graph = [];
let visited = new Array(n).fill(false);
let selected = [];
let answer = Infinity;
let tmp;
for (let i = 0; i < n; i++) {
  path.push(i);
  graph.push(input[i].split(" ").map(Number));
}

function dfs(depth) {
  if (depth === n) {
    // 비용 구하기
    tmp = 0;
    for (let x = 0; x < n; x++) {
      if (graph[selected[x]][selected[(x + 1) % n]] === 0) return;
      tmp += graph[selected[x]][selected[(x + 1) % n]];
    }
    answer = Math.min(answer, tmp);
    return;
  }
  for (let x of path) {
    if (!visited[x]) {
      selected.push(x);
      visited[x] = true;
      dfs(depth + 1);
      selected.pop();
      visited[x] = false;
    }
  }
}

dfs(0);
console.log(answer);
