// Basic Authentication
// ---------------------------------------------------------------------

const request = require("supertest");

const app = require("./app");

// ---------------------------------------------------------------------

describe("app", function () {
  describe("GET /api/data", function () {
    test("accept valid credentials", async function () {
      await request(app)
        .get("/api/data")
        .auth("user1", "password1") // facilitates http basic access authentication
        .expect(200); // OK
    });

    test("reject invalid credentials", async function () {
      await request(app)
        .get("/api/data")
        .auth("user1", "wrong-password")
        .expect(401); // Unauthorized
    });
  });
});
