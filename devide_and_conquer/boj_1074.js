const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, r, c] = input[0].split(" ").map(Number);
let arr = [[r, c]];
// 7, 7, 3
// 3, 3
let line;
let result = 0;
for (let i = n; i > 1; i--) {
  // 512, 512
  // 5, 5 -> 0, 0
  line = 2 ** (i - 1); // 512
  tmp = 4 ** (i - 1);
  // 2사분면
  if (line > r && line <= c) {
    c -= line;
    result += tmp;
    arr.push([r, c]);
    // 3사분면
  } else if (line <= r && line > c) {
    r -= line;
    result += 2 * tmp;
    arr.push([r, c]);
    // 4사분면
  } else if (line <= r && line <= c) {
    r -= line;
    c -= line;
    result += 3 * tmp;
    arr.push([r, c]);
  }
}
result += 2 * r + c;
console.log(result);
