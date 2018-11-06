function chunkArray(arr, size) {
  let chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + size));
    i += size;
  }
  return chunkedArr;
}

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
module.exports = chunkArray;
