class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
  }

  isEmpty() {
    if (this.tail === null && this.head === null) return true;
    return false;
  }

  push(data) {
    const newNode = new Node(data);
    // 비어있으면 head, tail 둘다 설정
    if (this.isEmpty()) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
  }

  pop() {
    // 비어있으면 못 뺌
    if (this.isEmpty()) return -1;
    const popData = this.head;
    // 하나 남은 경우 다 null 만들어야함
    this.head = this.head.next;
    if (this.head === null) this.tail = null;
    return popData;
  }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

while (1) {
  const popData = queue.pop();
  if (popData === -1) break;
  console.log(popData.data);
}
