class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null; //처음에 데이터가 없다면 head는 null이다.
    this.size = 0; //리스트의 크기를 찾기위해 사용 디폴트는 0으로 지정.
  }

  // 맨앞에 삽입
  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // 마지막 삽입
  insertLast(data) {
    const newNode = new Node(data);
    let current;

    // 헤드가 빈거면 아예 빈 리스트
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;

      // 헤드부터 시작해서 마지막까지 순차 탐색
      while (current.next) current = current.next;

      current.next = node; // 마지막에 넣음
    }
    this.size++; //length 는 1증가
  }

  // 중간 삽입
  insertAt(data, index) {
    // 전체 길이보다 길면 아무것도 안함
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const newNode = new Node(data);
    let current, previous;

    // 헤드부터 시작
    current = this.head;
    let count = 0;

    // 위치 찾을때 까지 돌림
    while (count < index) {
      // 이전 노드
      previous = current;
      count++;
      // 다음 노드
      current = current.next;
    }

    // 이전노드와 다음노드 사이에 이어줌
    node.next = current;
    previous.next = node;

    this.size++;
  }

  // 특정 index node 찾기
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      //해당 data의 값을 가져오기 위해 index와 값이 같아질때까지 loop한다.
      if (count == index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // 특정 index node 삭제
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head; //current는 현재 첫번째 노드임
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      //loop를 통해 해당 index의 연결고리를 끊는다.
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }
}

const linkedList = new LinkedList();
linkedList.insertFirst(1);
linkedList.insertFirst(2);
linkedList.insertFirst(3);
console.log(linkedList.getAt(2));
