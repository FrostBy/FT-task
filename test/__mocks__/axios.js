const axios = jest.genMockFromModule('axios');

axios.create.mockReturnThis();

module.exports = axios;