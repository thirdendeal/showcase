// Defining Types
// ---------------------------------------------------------------------
//
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// There are two syntaxes for building types: Interfaces and Types
// You should prefer interface
// Use type when you need specific features

// ---------------------------------------------------------------------

// Explicitly describe an object’s shape using an interface declaration

interface User {
  name: string;
  id: number;
}

// Declare that an object conforms to the shape of an interface

const userHayes: User = {
  name: "Hayes",
  id: 0,
};

// ---------------------------------------------------------------------

// Use an interface declaration with classes

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const userMurphy: User = new UserAccount("Murphy", 1);

// ---------------------------------------------------------------------

// Use interfaces to annotate parameters and return values to functions

function deleteUser(user: User) {
  // ...
}

function getAdminUser(): User {
  //...

  return userHayes;
}
