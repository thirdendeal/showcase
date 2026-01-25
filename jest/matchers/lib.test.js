// Matchers
// ---------------------------------------------------------------------
//
// https://jestjs.io/docs/using-matchers

// Multiple Matchers
//
// When Jest runs, it tracks all the failing matchers

// ---------------------------------------------------------------------

const { shoppingList, compileAndroidCode } = require("./lib");

// ---------------------------------------------------------------------

test("object fields", () => {
  const data = { one: 1 };
  data["two"] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

// ---------------------------------------------------------------------

test("array elements", () => {
  const data = [1];
  data.push(2);

  expect(data).toEqual([1, 2]);
});

// ---------------------------------------------------------------------

test("null", () => {
  const n = null;

  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).toBeFalsy();

  // Test for the opposite of a matcher using not

  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
});

// ---------------------------------------------------------------------

test("zero", () => {
  const z = 0;

  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// ---------------------------------------------------------------------

test("two plus two", () => {
  const value = 2 + 2;

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// ---------------------------------------------------------------------

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;

  // For floating point equality, use toBeCloseTo
  // Both toBe and toEqual won't work due to rounding errors

  expect(value).toBeCloseTo(0.3);
});

// ---------------------------------------------------------------------

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// ---------------------------------------------------------------------

test("shopping list contains milk", () => {
  expect(shoppingList).toContain("milk");

  expect(new Set(shoppingList)).toContain("milk"); // also works on iterables
});

// ---------------------------------------------------------------------

test("compiling android throws", () => {
  // The throwing function must be invoked within a wrapping function

  expect(() => compileAndroidCode()).toThrow(); // note the () => wrapping function
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp

  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below

  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/);
});
