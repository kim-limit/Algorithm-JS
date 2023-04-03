const fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// .map(Number);
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let baskets = new Array(n).fill(0).map((value, index) => index + 1);

solution(input);
console.log(...baskets);

function solution(input) {
  input.forEach((data) => {
    let [i, j, k] = data.split(" ").map(Number);
    const tempBaskets = [...baskets];
    baskets = tempBaskets
      .slice(0, i - 1)
      .concat(
        tempBaskets.slice(k - 1, j).concat(tempBaskets.slice(i - 1, k - 1))
      )
      .concat(tempBaskets.slice(j, tempBaskets.length));
  });
}
