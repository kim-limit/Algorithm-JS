const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function dfs(v, graph, visited, finished, result) {
  visited[v] = true;
  let dest = graph[v]; // 다음 갈 곳
  // 안갔으면
  if (!visited[dest]) {
    dfs(dest, graph, visited, finished, result);
    // 만약 방문했는데 처리가 안되있다? -> 사이클 있는거임
  } else if (!finished[dest]) {
    // dest부터 사이클 있는거니까
    // dest부터 v까지 한바퀴 돌리면 사이클 있는 애들 확인 가능
    while (dest !== v) {
      result.push(dest);
      dest = graph[dest];
    }
    result.push(dest);
  }
  finished[v] = true; // 처리 완료
}

let n = Number(input.shift());
let graph = [0];
for (let i = 0; i < n; i++) graph.push(Number(input[i]));
let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
let result = [];
for (let i = 1; i <= n; i++) {
  if (!visited[i]) dfs(i, graph, visited, finished, result);
}
console.log(result.length);
result.sort((a, b) => a - b);
result.forEach((data) => console.log(data));
