const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let data = input[0].split("-"); // -로 자르기
let result = 0;
for (let i = 0; i < data.length; i++) {
  let tmp = data[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i === 0) result += tmp;
  else result -= tmp;
}

console.log(result);
