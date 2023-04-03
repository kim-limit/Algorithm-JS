const fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().trim().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
let data = input[0].split(" ").map(Number);

let myArr = [...new Set(data)];
myArr.sort((a, b) => {
  return a - b;
});

let myDict = {};
myArr.map((d, idx) => {
  myDict[d] = idx;
});

solution(data);
function solution(data) {
  result = "";
  data.map((d) => {
    result += myDict[d] + " ";
  });

  console.log(result);
}
