/**
 * @param arr 리스트
 * @param target 찾아야 할 값
 * @param start 시작 시점
 * @param end 끝지점
 */
function binarySearch(arr, target, start, end) {
  if (start > end) return -1; // 만약 시작과 끝이 엇갈리면 값이 없는거임
  let mid = parseInt((start + end) / 2);
  if (arr[mid] == target) return mid; // 가운데가 찾는 값이면 바로 return
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  // 가운데가 더 크면 왼쪽으로
  else return binarySearch(arr, target, mid + 1, end); // 더 작으면 오른쪽으로

  // while (start >= end) {
  //   let mid = parseInt((start + end) / 2);
  //   if (arr[mid] == target) return mid;
  //   else if (arr[mid] > target) end = mid - 1;
  //   else start = mid + 1;
  // }
  // return -1;
}

let n = 10; // arr 개수
let target = 7; // 찾아야 할 수
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let result = binarySearch(arr, target, 0, n - 1);
if (result === -1) console.log("찾는 값이 없습니다");
else console.log(`${result + 1} 번째 원소입니다.`);
