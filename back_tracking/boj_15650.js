const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i < n + 1; i++) arr.push(i);
let visited = new Array(n + 1).fill(false);
let selected = [];
let answer = "";

// 자기보다 큰애들을 골라야함 -> start 추가
function dfs(depth, start) {
  if (depth === m) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return;
  }
  // 이전 방문한 곳에 + 1 한게 start이니까 start 부터 시작
  for (let i = start; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(arr[i]);
      // 다음은 자기보다 큰 애들만 선택
      dfs(depth + 1, i + 1);
      visited[i] = false;
      selected.pop();
    }
  }
}

solution(n, m);
function solution(n, m) {
  dfs(0, 0);
  console.log(answer);
}
