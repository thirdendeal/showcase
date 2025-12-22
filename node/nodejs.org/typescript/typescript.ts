// TypeScript
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/typescript/introduction#first-typescript-code
// https://nodejs.org/en/learn/typescript/run-natively

// You can execute TypeScript directly in Node.js
//
// - If you are using v22.18.0 or later
//   --> And your source code contains only erasable TypeScript syntax
// - If you are using a version less than v22.18.0
//   --> And you use the --experimental-strip-types flag

// Constraints
//
// https://nodejs.org/docs/latest-v22.x/api/typescript.html#typescript-features

// Configuration
//
// The Node.js TypeScript loader (Amaro) does not need or use tsconfig.json

// ---------------------------------------------------------------------

type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine = {
  name: "Justine",
  age: 23,
} satisfies User;

// ---------------------------------------------------------------------

console.log("Is Justine an adult?");
console.log(isAdult(justine));
