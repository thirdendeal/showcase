// Password Hashing
// ---------------------------------------------------------------------

const request = require("supertest");

const app = require("./app");

// ---------------------------------------------------------------------

describe("app", function () {
  describe("POST /signup", function () {
    test("sign up a new user", async function () {
      await request(app)
        .post("/signup")
        .send({ username: "my-username", password: "my-password" })
        .expect(201); // Created
    });
  });

  describe("POST /login", function () {
    test("accept valid credentials", async function () {
      await request(app)
        .post("/login")
        .send({ username: "my-username", password: "my-password" })
        .expect(200); // OK
    });

    test("reject invalid credentials", async function () {
      await request(app)
        .post("/login")
        .send({ username: "my-username", password: "not-my-password" })
        .expect(401); // Unauthorized
    });
  });
});
