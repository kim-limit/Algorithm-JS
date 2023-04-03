const fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().trim().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
let data = [];

input.map((d) => {
  let [a, b] = d.split(" ").map(Number);
  data.push([a, b]);
});

solution(data);

function solution(data) {
  data.sort((a, b) => {
    if (a[0] - b[0] !== 0) return a[0] - b[0];
    else return a[1] - b[1];
  });

  result = "";
  for (let point of data) {
    result += point[0] + " " + point[1] + "\n";
  }

  console.log(result);
}
