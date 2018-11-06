const chunkArray = require("./chunkArray");

test("chunkArray function exists", () => {
  expect(chunkArray).toBeDefined();
});

test("Chunk an array of 10 values with length of 2", () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let len = 2;
  let chunkedArray = chunkArray(numbers, len);
  expect(chunkedArray).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});
