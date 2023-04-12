const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [length, width, height] = input.shift().split(" ").map(Number);
let n = Number(input.shift());
let cube = new Array(20).fill(0);

let max; // 큐브 최대 크기
for (let i = 0; i < n; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  cube[a] = b;
  max = a;
}

let used = 0; // 현재 채운 크기
let result = 0; // 몇개 사용헀는지
for (let i = max; i >= 0; i--) {
  // 지금 까지 채운거 계속 8곱해줘야 실제 크기 나옴
  used *= 8;

  let cubelen = 2 ** i; // 현재 큐브 길이
  let requirement = // 들어 갈 수 있는 큐브 개수
    parseInt(length / cubelen) *
      parseInt(width / cubelen) *
      parseInt(height / cubelen) -
    used; // 전에 채운건 뺴줌

  let usage = Math.min(requirement, cube[i]); // 큐브의 개수가 한정적이기 때문
  used += usage; // 지금까지 채운 면적이라고 생각하면 됨
  result += usage; // 지금까지 사용한 큐브 개수
}

if (used === length * width * height) console.log(result);
else console.log(-1);
