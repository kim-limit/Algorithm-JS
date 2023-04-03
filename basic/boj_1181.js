const fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().trim().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
let data = new Set();

input.map((d) => {
  data.add(d);
});
let myArr = Array.from(data);

solution(myArr);

function solution(data) {
  data.sort((a, b) => {
    if (a.length - b.length !== 0) return a.length - b.length;
    else {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }
  });

  result = "";
  data.map((d) => (result += d + "\n"));

  console.log(result);
}
