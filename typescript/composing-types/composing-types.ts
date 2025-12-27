// ---------------------------------------------------------------------
// Composing Types
// ---------------------------------------------------------------------
//
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// ---------------------------------------------------------------------
// Unions
// ---------------------------------------------------------------------
//
// Declare that a type could be one of many types

function getLength(object: string | string[]) {
  return object.length;
}

// Describe the set of string or number literals that a value is allowed to be

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// ---------------------------------------------------------------------
// Generics
// ---------------------------------------------------------------------
//
// Generics provide variables to types

type Strings = Array<string>; // same as string[]
let strings: Strings = [];

strings = ["A"];
strings = ["A", "B"];
// strings = ["A", 1] // Type 'number' is not assignable to type 'string'

// ---------------------------------------------------------------------

type NamedObjects = Array<{ name: string }>;
let namedObjects: NamedObjects = [];

namedObjects = [{ name: "Luca" }];
namedObjects = [{ name: "Luca" }, { name: "Alberto" }];
// namedObjects = [{name: "Luca"}, {}] // Property 'name' is missing in type '{}' but required in type '{ name: string; }'

// ---------------------------------------------------------------------

class Stack<Type> {
  array: Array<Type>;

  constructor() {
    this.array = [];
  }

  push(value: Type) {
    this.array.push(value);
  }

  pop(): Type | undefined {
    return this.array.pop();
  }
}

// ---------------------------------------------------------------------

const stringStack: Stack<string> = new Stack();

stringStack.push("A");
stringStack.push("B");
// stringStack.push(1); // Argument of type 'number' is not assignable to parameter of type 'string'

const numberStack: Stack<number> = new Stack();

numberStack.push(1);
numberStack.push(2);
// numberStack.push("A"); // Argument of type 'string' is not assignable to parameter of type 'number'
