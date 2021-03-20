const api = require('../api');

module.exports = async ({ id }) => {
    try {
        const { data } = await api.get(`/${id}`);
        return data;
    } catch (error) {
        return error;
    }
};
