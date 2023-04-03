const fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().trim().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = +input.shift();
let x = [];
let y = [];

input.forEach((data) => {
  let newData = data.split(" ");
  x.push(parseInt(newData[0]));
  y.push(parseInt(newData[1]));
});

x.sort(function (a, b) {
  return a - b;
});
y.sort(function (a, b) {
  return a - b;
});

solution(x[n - 1] - x[0], y[n - 1] - y[0]);

function solution(x, y) {
  console.log(x * y);
}
