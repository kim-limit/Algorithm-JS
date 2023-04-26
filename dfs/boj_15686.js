const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function dfs(depth, start) {
  // m개 조합 여기서 최소 찾음
  if (depth === m) {
    // 집 별로 최소 찾을 변수
    let min_value = new Array(house.length).fill(Infinity);
    for (let i = 0; i < house.length; i++) {
      for (let [a, b] of selected) {
        // 집별로 최소 찾기
        min_value[i] = Math.min(
          min_value[i],
          Math.abs(house[i][0] - a) + Math.abs(house[i][1] - b)
        );
      }
    }
    // 모든 집에서의 최소 비교
    result = Math.min(
      min_value.reduce((acc, cur) => {
        return (acc += cur);
      }, 0),
      result
    );
    return;
  }
  for (let i = start; i < chicken.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(chicken[i]);
      dfs(depth + 1, i);
      visited[i] = false;
      selected.pop();
    }
  }
}

let [n, m] = input.shift().split(" ").map(Number);
let graph = [];
let house = [];
let chicken = [];
let selected = [];
let result = Infinity;

for (let i = 0; i < n; i++) {
  graph.push(input[i].split(" ").map(Number));
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 1) house.push([i, j]); // 집 저장
    else if (graph[i][j] === 2) chicken.push([i, j]); // 치킨집 저장
  }
}

let visited = new Array(chicken.length).fill(false); // 치킨집 방문 기록
dfs(0, 0);
console.log(result);
