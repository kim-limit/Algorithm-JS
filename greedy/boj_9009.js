const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = Number(input.shift());
let fibo = [0, 1];

for (let i = 0; i < t; i++) {
  let n = Number(input[i]);
  solution(n, fibo);
}

function solution(n, fibo) {
  let result = [];
  // n보다 클떄 까지 fibo 돌림
  while (fibo[fibo.length - 1] < n) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }

  let i = fibo.length - 1; // 가장 마지막 피보나치 인덱스
  while (n > 0) {
    if (n >= fibo[i]) {
      n -= fibo[i];
      result.push(fibo[i]);
    }
    i--;
  }

  let answer = "";
  for (let i = result.length - 1; i >= 0; i--) {
    answer += result[i] + " ";
  }
  console.log(answer);
}
