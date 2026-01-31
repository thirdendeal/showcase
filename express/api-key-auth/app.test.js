//  Token-Based Authentication (JWT)
// ---------------------------------------------------------------------

const request = require("supertest");

const { app, apiKeys } = require("./app");

// ---------------------------------------------------------------------

describe("app", function () {
  describe("GET /api/data", function () {
    test("accept valid API keys", async function () {
      for (let key of apiKeys.keys()) {
        await request(app).get("/api/data").set("x-api-key", key).expect(200);
      }
    });

    test("reject invalid API keys", async function () {
      await request(app)
        .get("/api/data")
        .set("x-api-key", "my-invalid-api-key")
        .expect(403);
    });
  });

  describe("POST /api/keys", function () {
    test("generate API keys", async function () {
      await request(app)
        .post("/api/keys")
        .send({ owner: "Custom Client", permissions: ["read"] })
        .expect(201);
    });
  });

  describe("POST /api/add", function () {
    test("reject insufficient permissions", async function () {
      const response = await request(app)
        .post("/api/keys")
        .send({ owner: "Custom Client", permissions: ["read"] })
        .expect(201);

      await request(app)
        .post("/api/add")
        .set("x-api-key", response.body.apiKey)
        .expect(403);
    });
  });
});
