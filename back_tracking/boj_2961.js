const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input.shift());
let sour = [];
let bit = [];
let arr = [];
let visited = new Array(n).fill(false);
let selected = [];
let min = Infinity;

for (let i = 0; i < n; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  arr.push(i);
  sour.push(a);
  bit.push(b);
}

function dfs(depth, start) {
  if (depth === n) {
    let sour_tmp = 1;
    let bit_tmp = 0;
    for (let x of selected) {
      sour_tmp *= sour[x];
      bit_tmp += bit[x];
    }
    min = Math.min(Math.abs(sour_tmp - bit_tmp), min);
    return;
  }
  for (let i = start; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(i);
      dfs(depth + 1, i + 1);
      visited[i] = false;
      selected.pop();
    }
  }
}

solution(n);
function solution(n) {
  for (let i = 0; i < n; i++) {
    dfs(i, 0);
  }
  console.log(min);
}
