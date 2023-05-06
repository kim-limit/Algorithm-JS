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
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let n = Number(input.shift());
let m = Number(input.shift());
let friends = [];
let visited = new Array(n + 1).fill(0);
for (let i = 0; i <= n; i++) friends[i] = [];
for (let i = 0; i < m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  friends[a].push(b);
  friends[b].push(a);
}

let queue = new Queue();
queue.enqueue(1);
visited[1] = 1;

while (queue.getLength() !== 0) {
  let now = queue.dequeue();
  for (let next of friends[now]) {
    if (visited[next] === 0) {
      visited[next] = visited[now] + 1;
      queue.enqueue(next);
    }
  }
}

// 친구관계가 2또는 3이면 초대
let result = 0;
for (let friend of visited) {
  if (friend === 2 || friend === 3) {
    result += 1;
  }
}
console.log(result);
