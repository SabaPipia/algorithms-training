function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  while (j != arr.length) {
    if (arr.length === 0) {
      console.log(0);
      return;
    } else if (arr[i] === arr[j]) {
      j++;
    } else if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }

  const unique = arr.slice(0, [i]);
  console.log(unique.length + 1);
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
