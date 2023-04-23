const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function dfs(v, prev, visited, graph) {
  visited[v] = true;
  for (let dest of graph[v]) {
    if (!visited[dest]) {
      // 방문 안한 곳 중에
      if (dfs(dest, v, visited, graph)) return true; // 사이클 있으면
    } // 방문 한곳중인데 이전이 아니면 사이클
    else if (dest !== prev) return true;
  }
  return false;
}

let line = 0;
let cases = 1;

while (true) {
  let [n, m] = input[line].split(" ").map(Number);
  if (n === 0 && m === 0) break;
  // 그래프 생성 부분
  let graph = [];
  for (let i = 0; i <= n; i++) graph.push([]);
  for (let i = 1; i <= m; i++) {
    let [a, b] = input[line + i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  let visited = new Array(n + 1).fill(false);
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!dfs(i, 0, visited, graph)) count++;
    }
  }
  if (count === 0) {
    console.log(`Case ${cases}: No trees.`);
  } else if (count === 1) {
    console.log(`Case ${cases}: There is one tree.`);
  } else {
    console.log(`Case ${cases}: A forest of ${count} trees.`);
  }
  line += m + 1;
  cases++;
}
