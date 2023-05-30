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

let [n, m] = input.shift().split(" ").map(Number);
let graph = [];
for (let i = 0; i < n; i++) graph.push(input[i].split(" ").map(Number));
let count = 0;

let dx = [0, 0, -1, 1];
let dy = [1, -1, 0, 0];
while (true) {
  if (isComplete()) break;

  count++;
  let visited = [];
  for (let i = 0; i < n; i++) visited.push(new Array(m).fill(0));
  let queue = new Queue();
  queue.enqueue([0, 0]);
  visited[0][0] = 1;

  while (queue.getLength() !== 0) {
    let [x, y] = queue.dequeue();

    for (let dir = 0; dir < 4; dir++) {
      let nx = x + dx[dir];
      let ny = y + dy[dir];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (graph[nx][ny] === 0) {
        if (visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          queue.enqueue([nx, ny]);
        }
      } else {
        graph[nx][ny]++;
      }
    }
  }
  initGraph();
}

function initGraph() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) graph[i][j] = 0;
      else if (graph[i][j] !== 0) graph[i][j] = 1;
    }
  }
}

function isComplete() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) return false;
    }
  }
  return true;
}

console.log(count);
