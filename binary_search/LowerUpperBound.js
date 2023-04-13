function lowerBound(arr, target, start, end) {
  while (start < end) {
    // 같으면 바로 끝냄
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target)
      end = mid; // 최대한 왼쪽으로 밀어야 하기 때문에 mid임
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target)
      end = mid; // 최대한 오른쪽으로 밀어야 하기 때문에 mid임
    else start = mid + 1;
  }
  return end;
}
