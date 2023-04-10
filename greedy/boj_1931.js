const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input.shift());
let times = [];

for (let i = 0; i < n; i++) {
  times.push(input[i].split(" ").map(Number));
}

solution(n, times);

function solution(n, times) {
  times.sort((a, b) => {
    if (a[1] != b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let lastTime = -1;
  let count = 0;
  for (let time of times) {
    if (lastTime <= time[0]) {
      lastTime = time[1];
      count++;
    }
  }

  console.log(count);
}
