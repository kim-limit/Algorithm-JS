class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  push(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  pop() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  head() {
    return this.items[this.headIndex];
  }
  lens() {
    return this.tailIndex - this.headIndex;
  }
}

let queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(2);
queue.push(2);
queue.pop();

while (queue.lens() != 0) {
  console.log(queue.pop());
}
