const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('fetch places', () => {
    it('returns 2 mocked place ids', async (done) => {
        request
            .post('/graphql')
            .send({
                query: '{ places }',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => { /*eslint-disable-line */
                if (err) {
                    return done(err);
                }
                expect(res.body.data).toBeInstanceOf(Object);
                expect(res.body.data.places.length).toEqual(2);
                done();
            });
    });
});
