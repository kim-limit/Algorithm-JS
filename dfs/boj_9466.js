const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function dfs(v, visited, graph, result, finished) {
  visited[v] = true;
  let dest = graph[v]; // 다음 방문할 곳
  if (!visited[dest]) {
    dfs(dest, visited, graph, result, finished);
  } else if (!finished[dest]) {
    while (dest != v) {
      result.push(dest);
      dest = graph[dest];
    }
    result.push(v);
  }
  finished[v] = true;
}

let t = Number(input.shift());
let line = 0;
let count = 0;
while (t--) {
  count = 0;
  let n = Number(input[line]);
  line++;
  let score = input[line].split(" ").map(Number);
  line++;
  // 그래프 설정
  let graph = new Array(n + 1).fill(0);
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];
  for (let i = 0; i < n; i++) graph[i + 1] = score[i];
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i, visited, graph, result, finished);
    }
  }
  console.log(n - result.length);
}
