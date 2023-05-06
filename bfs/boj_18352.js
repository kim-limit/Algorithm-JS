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

let [n, m, k, x] = input.shift().split(" ").map(Number);

// graph 초기화
let graph = [];
for (let i = 0; i <= n; i++) {
  graph[i] = [];
}
for (let i = 0; i < m; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  graph[start].push(end);
}

let visited = new Array(n + 1).fill(-1);
visited[x] = 0;

let queue = new Queue();
queue.enqueue(x); // 시작 도착

// bfs
while (queue.getLength() !== 0) {
  let now = queue.dequeue();
  for (let next of graph[now]) {
    // 현재에서 다음 갈수 있는 곳 다 확인
    if (visited[next] === -1) {
      // 안가봤던 곳이면
      visited[next] = visited[now] + 1; // 현재에서 1칸간거
      queue.enqueue(next);
    }
  }
}

result = "";
for (let i = 1; i <= n; i++) {
  if (visited[i] === k) {
    result += i + "\n";
  }
}
if (result === "") console.log(-1);
else console.log(result);
