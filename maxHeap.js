class MaxHeap {
  constructor() {
    this.data = [];
  }

  // 부모 인덱스 찾기
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  swap(i1, i2) {
    const temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }

  push(data) {
    // 우선 배열의 가장 끝에 값 넣음
    this.data[this.data.length] = data;
    // 부모와 비교하면서 내가더 크면 계속 바꿈
    this.heapifyUp();
  }

  // 부모와 비교하는 함수
  heapifyUp() {
    // 현재 들어온 값의 index
    let currentIndex = this.data.length - 1;

    // 조건은 현재의 값과 부모의 값을 비교
    while (
      this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
    ) {
      // 조건을 만족헀다는 것은 부모보다 더 크다는 것이고 그렇기 때문에 값을 바꿔야함
      this.swap(currentIndex, this.getParentIndex(currentIndex));

      // 부모와 위치가 바뀌었기 때문에 currentIndex값 갱신
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  pop() {
    // 가장큰값 빼는거니까 0번째가 가장 큰 값
    const maxValue = this.data[0];

    // 최상단 요소를 맨 아래 요소와 바꿈
    this.data[0] = this.data[this.data.length - 1];
    // 마지막 요소 삭제
    this.data.pop();

    // 자식들과 비교하면서 자식이 더크면 바꿈
    this.heapifyDown();

    return maxValue;
  }

  heapifyDown() {
    // index 0 최상위 요소
    let currentIndex = 0;

    // 왼쪽요소가 없으면 leaf노드라고 할 수 있음
    while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currentIndex);

      // 왼쪽노드와 오른쪽 노드중 더 큰값을 찾음
      if (
        this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
        this.data[this.getRightChildIndex(currentIndex)] >
          this.data[this.getLeftChildIndex(currentIndex)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currentIndex);
      }

      // 만약 자식노드가 더 크다면 swap후 current index 갱신
      if (this.data[currentIndex] < this.data[biggestChildIndex]) {
        this.swap(currentIndex, biggestChildIndex);
        currentIndex = biggestChildIndex;
      } else {
        return;
      }
    }
  }
}

const heap = new MaxHeap();

heap.push(5);
heap.push(90);
heap.push(70);
// heap.push(44);
// heap.push(40);
// heap.push(25);
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap);
