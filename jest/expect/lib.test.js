// Expect
// ---------------------------------------------------------------------
//
// https://jestjs.io/docs/getting-started

// Gives you access to "Matchers" that let you validate different things

const sum = require("./lib");

// ---------------------------------------------------------------------

// test(name, fn, timeout = 5000) (alias: it)

test("adds 1 + 2 to equal 3", () => {
  // expect(value)

  expect(sum(1, 2)).toBe(3); // matcher toBe(value) (Object.is equality)
});
