class MinHeap {
  constructor() {
    this.data = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return i * 2 + 1;
  }
  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  swap(l1, l2) {
    const tmp = this.data[l1];
    this.data[l1] = this.data[l2];
    this.data[l2] = tmp;
  }

  push(data) {
    this.data[this.data.length] = data;

    this.heapifyUp();
  }
  heapifyUp() {
    let currentIndex = this.data.length - 1;

    while (
      this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));

      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  pop() {
    const minValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];

    this.data.pop();

    this.heapifyDown();
  }
  heapifyDown() {
    let currentIndex = 0;

    // 왼쪽 자식 없으면 리프노드임
    while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
      let smallestChildIndex = this.getLeftChildIndex(currentIndex);

      if (
        this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
        this.data[this.getRightChildIndex(currentIndex)] <
          this.data[smallestChildIndex]
      ) {
        smallestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.data[currentIndex] > this.data[smallestChildIndex]) {
        this.swap(currentIndex, smallestChildIndex);

        currentIndex = smallestChildIndex;
      } else {
        return;
      }
    }
  }
}

const heap = new MinHeap();

heap.push(1);
heap.push(100);
heap.push(1001);
heap.push(3);
heap.push(2);

heap.pop();
heap.push(1);
console.log(heap);
heap.pop();
heap.pop();
console.log(heap);
