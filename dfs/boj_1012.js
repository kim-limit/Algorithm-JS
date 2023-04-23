const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];
function dfs(x, y, n, m) {
  graph[x][y] = -1;
  for (let dir = 0; dir < 4; dir++) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (graph[nx][ny] === 1) {
      dfs(nx, ny, n, m);
    }
  }
}

let test = Number(input.shift());

let graph; // 그래프
let line = 0; // 입력용

while (test--) {
  let count = 0;

  let [m, n, k] = input[line].split(" ").map(Number);
  graph = [];
  for (let i = 0; i < n; i++) {
    graph.push(new Array(m).fill(0));
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1;
  }

  for (let i = 0; i < n; i++) {
    // 다 돌면서 1인 곳을 찾아서 dfs
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j, n, m);
        count += 1;
      }
    }
  }

  console.log(count);
  line += k + 1; // 다음 출력
}
