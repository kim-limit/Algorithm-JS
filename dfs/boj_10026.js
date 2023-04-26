const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let dx = [0, 0, -1, 1];
let dy = [1, -1, 0, 0];
function dfs(x, y, color, visited) {
  visited[x][y] = true;
  for (let dir = 0; dir < 4; dir++) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (!visited[nx][ny] && graph[nx][ny] === color) {
      dfs(nx, ny, color, visited);
    }
  }
}

let n = Number(input.shift());
let graph = [];
let r_visited = []; // 적록색약
let visited = []; // 일반인
for (let i = 0; i < n; i++) {
  graph.push(input[i].split(""));
  visited.push(new Array(n).fill(false));
  r_visited.push(new Array(n).fill(false));
}
let count = [0, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      // 일반인
      dfs(i, j, graph[i][j], visited);
      count[0]++;
    }
  }
}

// 색약용으로 그래프 다시 초기화
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === "G") graph[i][j] = "R";
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!r_visited[i][j]) {
      // 적록색약
      dfs(i, j, graph[i][j], r_visited);
      count[1]++;
    }
  }
}
console.log(count[0], count[1]);
