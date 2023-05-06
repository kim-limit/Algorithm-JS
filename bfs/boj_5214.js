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

let [n, k, m] = input.shift().split(" ").map(Number);
let nodes = []; // 노드에서 갈수 있는 곳 + 하이퍼 튜브
let visited = new Array(n + m + 1).fill(-1); // 방문 기록
for (let i = 0; i <= n + m; i++) nodes[i] = [];
for (let i = 0; i < m; i++) {
  let data = input[i].split(" ").map(Number);
  // 하이퍼튜브 노드 연결
  for (let d of data) {
    nodes[d].push(i + n + 1);
    nodes[i + n + 1].push(d);
  }
}

let queue = new Queue();
// 1에서 부터 시작
queue.enqueue(1);
visited[1] = 1;
while (queue.getLength() !== 0) {
  let now = queue.dequeue();
  for (let next of nodes[now]) {
    if (visited[next] === -1) {
      visited[next] = visited[now] + 1;
      queue.enqueue(next);
    }
  }
}

// 하이퍼튜브가 중간에 있기 때문에 / 2 + 1 해줌
if (visited[n] === -1) console.log(-1);
else console.log(parseInt(visited[n] / 2) + 1);
