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
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex++];
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

function bfs(n, m) {
  let queue = new Queue();
  queue.enqueue(n);

  while (queue.getLength() !== 0) {
    let x = queue.dequeue();
    if (x === m) return visited[x];
    for (let nxt of [x - 1, x + 1, x * 2]) {
      if (nxt < 0 || nxt >= MAX) continue;
      if (!visited[nxt]) {
        visited[nxt] = visited[x] + 1;
        queue.enqueue(nxt);
      }
    }
  }
}

const MAX = 100001;
let [n, m] = input[0].split(" ").map(Number);
let visited = new Array(MAX).fill(0);
console.log(bfs(n, m));
