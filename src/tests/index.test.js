const request = require("supertest");
const server = require("../index");

describe("Get Endpoints", () => {
  it("Get", async () => {
    const { statusCode, body } = await request(server).get("/");

    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty("name");
  });
});

afterAll(function (done) {
  server.close(done);
});
