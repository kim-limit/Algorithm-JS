const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let cards = input[1].split(" ").map(Number);
let m = Number(input[2]);
let finds = input[3].split(" ").map(Number);

solution(n + 1, m, cards, finds);

function solution(n, m, cards, finds) {
  let result = "";
  let left, right;
  cards.sort((a, b) => a - b);
  cards.push(cards.reduce((a, b) => Math.max(a, b)));

  for (let find of finds) {
    // 하나씩 찾기
    left = lowerBound(cards, find, n);
    right = upperBound(cards, find, n);
    result += right - left + " ";
  }
  console.log(result);
}

function lowerBound(cards, find, n) {
  let start = 0;
  let end = n - 1;
  let mid;
  while (start < end) {
    mid = parseInt((start + end) / 2);
    if (cards[mid] >= find)
      // 오른쪽으로 밀어야함
      end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(cards, find, n) {
  let start = 0;
  let end = n - 1;
  let mid;
  while (start < end) {
    mid = parseInt((start + end) / 2);
    if (cards[mid] > find)
      // 왼쪽으로 밀어야함
      end = mid;
    else start = mid + 1;
  }
  return end;
}
