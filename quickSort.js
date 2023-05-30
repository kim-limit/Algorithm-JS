const swap = (arr, a, b) => {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};

const partition = (arr, start, end) => {
  let pivotValue = arr[Math.floor((start + end) / 2)];

  while (start <= end) {
    while (arr[start] < pivotValue) start++;
    while (arr[end] > pivotValue) end--;
    if (start <= end) {
      swap(arr, start, end);
      start++;
      end--;
    }
  }
  return start;
};

const quickSort = (arr, start, end) => {
  let pivot = partition(arr, start, end);
  if (start < pivot - 1) {
    quickSort(arr, start, pivot - 1);
  }
  if (pivot < end) {
    quickSort(arr, pivot, end);
  }
};

const arr = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
