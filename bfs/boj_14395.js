const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex++] = item;
  }
  dequeue() {
    let item = this.items[this.headIndex];
    delete this.items[this.headIndex++];
    return item;
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

function bfs(v, target, visited) {
  let queue = new Queue();

  // 다음 갈 곳과, 연산식 저장
  queue.enqueue([v, ""]);

  while (queue.getLength() !== 0) {
    let [x, cal] = queue.dequeue();
    if (x === target) return cal;

    // 여기서부터 3가지 경우 확인
    for (let next of [
      [x * x, "*"],
      [x + x, "+"],
      [x / x, "/"],
    ]) {
      if (next[0] > target) continue;
      if (!visited.has(next[0])) {
        visited.add(next[0]);
        queue.enqueue([next[0], cal + next[1]]);
      }
    }
  }
  return "";
}

let [s, t] = input[0].split(" ").map(Number);
let visited = new Set([s]);

// 우선 -인경우는 아예 나올수 없다고 생각
// 처음부터 같으면 0
if (s === t) console.log(0);
else {
  let result = bfs(s, t, visited);
  // 못만들면 -1
  if (result === "") console.log(-1);

  console.log(result);
}
