// NOTE: I named this module 'api', so I can have descriptive api.get() at /endpoints/place.js

const axios = require('axios').default;

module.exports = axios.create({
    baseURL: 'https://storage.googleapis.com/coding-session-rest-api',
});
