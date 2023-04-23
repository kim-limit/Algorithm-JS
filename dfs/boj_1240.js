const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function dfs(v, c, visited, distance) {
  // 모든 노드는 한번씩만
  if (visited[v]) return;
  visited[v] = true; // 방문 처리
  distance[v] = c; // 거리
  for (let [dest, cost] of graph[v]) {
    dfs(dest, c + cost, visited, distance);
  }
}

// 그래프 생성
let [n, m] = input[0].split(" ").map(Number);
let graph = [];
let result;
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i < n; i++) {
  let [x, y, k] = input[i].split(" ").map(Number);
  graph[x].push([y, k]);
  graph[y].push([x, k]);
}

for (let i = n; i < n + m; i++) {
  let visited = new Array(n + 1).fill(false);
  let distance = new Array(n + 1).fill(0);
  let [a, b] = input[i].split(" ").map(Number);

  dfs(a, 0, visited, distance);
  console.log(distance[b]);
}
