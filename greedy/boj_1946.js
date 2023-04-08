const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = parseInt(input.shift());
let line = 0;
for (let i = 0; i < t; i++) {
  let n = parseInt(input[line]);
  let data = [];

  for (let j = 0; j < n; j++) {
    // 사원 정보 입력
    data.push(input[line + j + 1].split(" ").map(Number));
  }

  data.sort((a, b) => a[0] - b[0]); // x기준으로 오름차순 정렬

  let min_value = Infinity; // 최소
  let count = 0;
  for (let [x, y] of data) {
    if (y < min_value) {
      // 만약 y가 최소? -> 선발 o
      min_value = y;
      count += 1;
    }
  }
  console.log(count);
  line += n + 1;
}
