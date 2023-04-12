const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const check = (str) => {
  return str === str.split("").reverse().join("");
};
const t = Number(input.shift());

for (let i = 0; i < t; i++) {
  const str = input[i];
  solution(str);
}

function solution(str) {
  let n = str.length;

  if (check(str)) {
    console.log(0); // 회문이면 0
    return;
  }

  for (let i = 0; i < parseInt(n / 2); i++) {
    // 다른 경우 찾음
    if (str[i] !== str[n - i - 1]) {
      // 왼쪽 제거 하고 검사
      if (check(str.slice(i + 1, n - i))) {
        console.log(1);
        return;
      }
      if (check(str.slice(i, n - i - 1))) {
        console.log(1);
        return;
      }
      console.log(2);
      return;
      // 오른쪽 제거하고 검사
    }
  }
}
