const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 울타리 설치하고 확인하는 함수
function dfs(depth) {
  // 울타리 설치
  if (depth === 3) {
    let count = 0;
    // 울타리 3개 설치했으면
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        // 울타리 복사
        tmp[i][j] = graph[i][j];
      }
    }
    // 여기서 바이러스 퍼트림
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (tmp[i][j] === 2) virus(i, j);
      }
    }
    // 범위 체크
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (tmp[i][j] === 0) count++;
      }
    }
    max_value = Math.max(max_value, count);
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) {
        graph[i][j] = 1;
        dfs(depth + 1);
        graph[i][j] = 0;
      }
    }
  }
}

// 바이러스 변이 dfs
dx = [0, 0, -1, 1];
dy = [1, -1, 0, 0];
function virus(x, y) {
  tmp[x][y] = 2;
  for (let dir = 0; dir < 4; dir++) {
    nx = x + dx[dir];
    ny = y + dy[dir];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (tmp[nx][ny] === 0) {
      virus(nx, ny);
    }
  }
}

// 입력
let [n, m] = input.shift().split(" ").map(Number);
let graph = []; // 진짜 맵
let tmp = []; // 울타리 추가 맵
for (let i = 0; i < n; i++) {
  graph.push(input[i].split(" ").map(Number));
  tmp.push(new Array(m).fill(0));
}
let max_value = -1;
dfs(0);
console.log(max_value);
