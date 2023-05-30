class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) return -1;
    const popData = this.top;
    this.top = this.top.next;
    return popData;
  }

  peek() {
    if (this.isEmpty()) return -1;
    return this.top.data;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

while (stack.peek() !== -1) {
  console.log(stack.pop().data);
}
