//  Token-Based Authentication (JWT)
// ---------------------------------------------------------------------

const app = require("./app");

const request = require("supertest");

// ---------------------------------------------------------------------

describe("app", function () {
  describe("POST /login", function () {
    test("accept valid credentials", async function () {
      await request(app)
        .post("/login")
        .send({ username: "admin", password: "password" })
        .expect(200)
        .expect((response) => {
          if (!("token" in response.body)) throw new Error("missing token");
        });
    });

    test("reject invalid credentials", async function () {
      await request(app)
        .post("/login")
        .send({ username: "admin", password: "wrong password" })
        .expect(401);
    });
  });

  describe("JWT Authentication", function () {
    test("accept correct usage", async function () {
      const response = await request(app)
        .post("/login")
        .send({ username: "admin", password: "password" });

      await request(app)
        .get("/profile")
        .set("Authorization", `Bearer ${response.body.token}`)
        .expect(200);
    });

    test("reject malformed, invalid or expired", async function () {
      // missing header
      await request(app).get("/profile").expect(401);

      // missing token
      await request(app).get("/profile").set("Authorization", "").expect(401);

      // invalid token
      await request(app)
        .get("/profile")
        .set("Authorization", `Bearer token`)
        .expect(403);
    });

    describe("GET /admin", function () {
      test("accept admin users", async function () {
        const response = await request(app)
          .post("/login")
          .send({ username: "admin", password: "password" });

        await request(app)
          .get("/admin")
          .set("Authorization", `Bearer ${response.body.token}`)
          .expect(200);
      });

      test("reject non admin users", async function () {
        const response = await request(app)
          .post("/login")
          .send({ username: "user1", password: "password1" });

        await request(app)
          .get("/admin")
          .set("Authorization", `Bearer ${response.body.token}`)
          .expect(403);
      });
    });
  });
});
