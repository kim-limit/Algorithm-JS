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

function check(graph, visited, n) {
  // 인접노드가 같은 방문기록이면 no
  for (let i = 1; i <= n; i++) {
    for (let j of graph[i]) {
      if (visited[i] === visited[j]) return "NO";
    }
  }
  return "YES";
}

// bfs 1이면 왼쪽 2면 오른쪽
function bfs(start, graph, visited) {
  let queue = new Queue();
  queue.enqueue(start);
  while (queue.getLength() !== 0) {
    let v = queue.dequeue();
    for (let next of graph[v]) {
      if (visited[next] === 0) {
        visited[next] = 1 + (visited[v] % 2);
        queue.enqueue(next);
      }
    }
  }
}

let test = Number(input.shift());
let line = 0;
while (test--) {
  // 입력
  let [n, m] = input[line++].split(" ").map(Number);
  let graph = [];
  for (let i = 0; i <= n; i++) graph[i] = [];
  for (let i = 0; i < m; i++) {
    let [x, y] = input[line++].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  let visited = new Array(n + 1).fill(0);

  // 방문안한노드 찾아서 다 돌림
  for (let i = 1; i <= n; i++) {
    if (visited[i] === 0) bfs(i, graph, visited);
  }

  console.log(check(graph, visited, n));
}
