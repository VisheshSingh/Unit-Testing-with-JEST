const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log("Database initialized...");
const closeDatabase = () => console.log("Database closed...");

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

// // Work with async data
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// test("User fetched name should be Leanne Graham", async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual("Leanne Graham");
// });
