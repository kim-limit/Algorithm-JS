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

let dx = [1, 1, -1, -1, 2, 2, -2, -2];
let dy = [2, -2, 2, -2, 1, -1, 1, -1];
function bfs(start_x, start_y, target_x, target_y, visited, n) {
  let queue = new Queue();
  queue.enqueue([start_x, start_y]);
  while (queue.getLength() !== 0) {
    let [x, y] = queue.dequeue();
    if (x === target_x && y === target_y) return visited[x][y];

    for (let dir = 0; dir < 8; dir++) {
      let nx = x + dx[dir];
      let ny = y + dy[dir];
      if ((nx < 0) | (nx >= n) | (ny < 0) | (ny >= n)) continue;
      if (visited[nx][ny] === 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
}
let test = Number(input.shift());
let line = 0;
while (test--) {
  let n = Number(input[line]);
  line++;
  let [start_x, start_y] = input[line].split(" ").map(Number);
  line++;
  let [target_x, target_y] = input[line].split(" ").map(Number);
  line++;
  let visited = [];
  for (let i = 0; i < n; i++) visited.push(new Array(n).fill(0));
  console.log(bfs(start_x, start_y, target_x, target_y, visited, n));
}
