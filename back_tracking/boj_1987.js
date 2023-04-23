const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [r, c] = input.shift().split(" ").map(Number);
let graph = [];
for (let i = 0; i < r; i++) graph.push(input[i]);
let visitied = new Set(); // 중복없는 알파벳
// 상하좌우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];
let result = -1; // 결과

function dfs(x, y, depth) {
  let nx, ny;
  result = Math.max(result, depth);
  for (let dir = 0; dir < 4; dir++) {
    nx = x + dx[dir];
    ny = y + dy[dir];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    if (!visitied.has(graph[nx][ny])) {
      visitied.add(graph[nx][ny]);
      dfs(nx, ny, depth + 1);
      visitied.delete(graph[nx][ny]);
    }
  }
}

visitied.add(graph[0][0]);
dfs(0, 0, 1);
console.log(result);
