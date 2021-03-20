const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

function queryFactory(id) {
    return `
    {
        place(id: "${id}") {
            displayed_what
            displayed_where
            opening_hours {
                days {
                    monday {
                        start
                        end
                        type
                    }
                    tuesday {
                        start
                        end
                        type
                    }
                    wednesday {
                        start
                        end
                        type
                    }
                    thursday {
                        start
                        end
                        type
                    }
                    friday {
                        start
                        end
                        type
                    }
                    saturday {
                        start
                        end
                        type
                    }
                    sunday {
                        start
                        end
                        type
                    }
                }
            }
        }
    }
    `;
}

describe('fetch place', () => {
    it('returns a place by id', async (done) => {
        const id = 'GXvPAor1ifNfpF0U5PTG0w';
        request
            .post('/graphql')
            .send({
                query: queryFactory(id),
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => { /*eslint-disable-line */
                if (err) {
                    return done(err);
                }
                expect(res.body.data.place).toBeInstanceOf(Object);
                done();
            });
    });

    it('returns an error for non-existing id', async (done) => {
        const id = 'non-existing-place-id';
        request
            .post('/graphql')
            .send({
                query: queryFactory(id),
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => { /*eslint-disable-line */
                if (err) {
                    return done(err);
                }
                expect(res.body).toBeInstanceOf(Object);
                expect(res.body.errors.length).toEqual(1);
                expect(res.body.errors[0].message).toEqual('Request failed with status code 404');
                expect(res.body.data.place).toEqual(null);
                done();
            });
    });
});
