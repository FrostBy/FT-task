const request = require('supertest');
const app = require('../app');
const axios = require("axios");
const data = require("./__fixtures__/securities-response.json");
const mockAxios = require("./__mocks__/axios");

process.env.NODE_ENV = 'test';

describe('Testing the server', () => {
    it('can run the express server and return a 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
// add your own tests here

    it("GET /jsx should render the SecuritiesQuotes.jsx page", async () => {
        mockAxios.mockResolvedValue({data});

        const response = await request(app).get("/jsx");
        expect(response.statusCode).toBe(200);
        expect(response.headers["content-type"]).toContain("text/html");
        expect(response.text).toContain("securities-quotes");
    });

    it("GET /jsx should render the Error.jsx page", async () => {
        mockAxios.mockRejectedValue(new Error('message'));

        const response = await request(app).get("/jsx");
        expect(response.statusCode).toBe(500);
        expect(response.headers["content-type"]).toContain("text/html");
        expect(response.text).toContain("Error");
    });

    it("GET /jsx should render the home.handlebars page", async () => {
        mockAxios.mockResolvedValue({data});

        const response = await request(app).get("/handlebars");
        expect(response.statusCode).toBe(200);
        expect(response.headers["content-type"]).toContain("text/html");
        expect(response.text).toContain("securities-quotes");
    });

    it("GET /jsx should render the error.handlebars page", async () => {
        mockAxios.mockRejectedValue(new Error('message'));

        const response = await request(app).get("/handlebars");
        expect(response.statusCode).toBe(500);
        expect(response.headers["content-type"]).toContain("text/html");
        expect(response.text).toContain("Error");
    });
});
