const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input.shift());
let road = input[0].split(" ").map(Number);
let cost = input[1].split(" ").map(Number);

solution(n, road, cost);

function solution(n, road, cost) {
  let minCost = cost[0];
  for (let i = 0; i < n; i++) {
    minCost = Math.min(cost[i], minCost);
    cost[i] = minCost;
  }

  let result = BigInt(0);

  for (let i = 0; i < n - 1; i++) {
    result += BigInt(road[i]) * BigInt(cost[i]);
  }

  console.log(String(result));
}
