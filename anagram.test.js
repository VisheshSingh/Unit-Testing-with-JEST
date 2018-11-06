const anagram = require("./anagram");

test("anagram function exists", () => {
  expect(typeof anagram).toEqual("function");
});

test("cinema is an anagram of iceman", () => {
  expect(anagram("cinema", "iceman")).toBeTruthy();
});

test("Dormitory is an anagram of dirty room##", () => {
  expect(anagram("Dormitory", "dirty room##")).toBeTruthy();
});

test("hello is not an anagram of aloha", () => {
  expect(anagram("hello", "aloha")).toBeFalsy();
});
