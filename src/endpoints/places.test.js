const app = require("../app");
const supertest = require("supertest");

const request = supertest(app);

describe("fetch places", () => {
    test("it should return 2 mocked place ids", async (done) => {
        request
            .post("/graphql")
            .send({
                query: "{ places }",
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.body.data).toBeInstanceOf(Object);
                expect(res.body.data.places.length).toEqual(2);
                done();
            });
    });
});
