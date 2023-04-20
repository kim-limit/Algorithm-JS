const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = Number(input.shift());
let current;
let arr = [];
let n;

function dfs(result, depth) {
  if (depth === n - 1) {
    let str = ""; // 계산용
    // 계산식 만들기
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
    str += arr[n - 1];
    // 계산, 대신 띄어쓰기 없애줘야댐
    current = eval(str.split(" ").join(""));

    if (current === 0) console.log(str);
    return; // 방문 표시가 없기 때문에 빠져나와야함
  }

  for (let cal of [" ", "+", "-"]) {
    result.push(cal);
    dfs(result, depth + 1);
    result.pop();
  }
}

for (let i = 0; i < t; i++) {
  n = input[i];
  for (let j = 1; j < n + 1; j++) arr.push(j);
  dfs([], 0);
  console.log();
}
