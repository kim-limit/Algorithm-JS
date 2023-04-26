const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

dx = [0, 0, -1, 1];
dy = [1, -1, 0, 0];
function dfs(x, y) {
  visited[x][y] = true;
  count[index]++;
  for (let dir = 0; dir < 4; dir++) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (!visited[nx][ny] && graph[nx][ny] === 1) {
      dfs(nx, ny);
    }
  }
}

let n = Number(input.shift());
let graph = [];
let visited = [];
let count = [];
let index = 0;
// 그래프, 방문기록 생성
for (let i = 0; i < n; i++) {
  graph.push(input[i].split("").map(Number));
  visited.push(new Array(n).fill(false));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 1이고 방문 안한곳 dfs돌림
    if (graph[i][j] === 1 && !visited[i][j]) {
      // 결과 저장 (count, index)
      count.push(0);
      dfs(i, j, count);
      index++;
    }
  }
}

count.sort((a, b) => a - b);
console.log(count.length);
count.forEach((data) => console.log(data));
