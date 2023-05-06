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

let [n, k] = input.shift().split(" ").map(Number);
let graph = [];
let virus = []; // 바이러스 정보
let queue = new Queue();

for (let i = 0; i < n; i++) {
  graph.push(input[i].split(" ").map(Number));
  graph[i].forEach((data, idx) => {
    if (data !== 0) {
      virus.push([data, 0, i, idx]); // 바이러스에 [바이러스 번호, 시간, x, y] 집어넣음
    }
  });
}
let [s, target_x, target_y] = input[n].split(" ").map(Number);

virus.sort((a, b) => a[0] - b[0]); // 바이러스 번호로 정렬

for (let data of virus) {
  // 큐에 삽입
  queue.enqueue(data);
}

// bfs
let dx = [0, 0, -1, 1];
let dy = [1, -1, 0, 0];
while (queue.getLength() !== 0) {
  let [index, time, x, y] = queue.dequeue();
  if (time === s) break; // 시간되면 끝냄
  for (let dir = 0; dir < 4; dir++) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (!graph[nx][ny]) {
      graph[nx][ny] = index;
      queue.enqueue([index, time + 1, nx, ny]);
    }
  }
}

console.log(graph[target_x - 1][target_y - 1]);
