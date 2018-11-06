const functions = require("./functions");

test(" Add 2 + 2 to be equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test(" Add 2 + 2 to be not equal to 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY AND FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the exact opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Shold be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

test("User should be Mary Jane", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Mary",
    lastName: "Jane"
  });
});

//Less than or greater than
test("Should be less than 1660", () => {
  const load1 = 800;
  const load2 = 800;
  //   expect(load1 + load2).toBeLessThan(1600);
  expect(load1 + load2).toBeGreaterThanOrEqual(1600);
});

// REGEX
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays
test("Should contain admin in usernames", () => {
  const usernames = ["Mary", "Parker", "admin"];
  expect(usernames).toContain("admin");
});
