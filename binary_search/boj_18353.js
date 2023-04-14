const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let peoples = input[1].split(" ").map(Number);

solution(n, peoples);

function solution(n, peoples) {
  peoples.reverse();
  let result = [0];
  for (let people of peoples) {
    if (result[result.length - 1] < people) {
      result.push(people);
    } else {
      let index = lowerBound(result, people);
      result[index] = people;
    }
  }
  console.log(n - result.length + 1);
}

function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}
