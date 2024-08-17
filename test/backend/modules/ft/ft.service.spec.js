const axios = require("axios");
const data = require("../../../__fixtures__/securities-response.json");
const mockAxios = require("../../../__mocks__/axios");

process.env.NODE_ENV = 'test';

const {getData} = require('../../../../backend/modules/ft/ft.service')

describe('Testing the ft.service', () => {
    it("should return data", async () => {
        mockAxios.mockResolvedValue({data});

        const result = await getData();
        expect(result).toBe(data.data.items);
    });

    it("should return false", async () => {
        mockAxios.mockRejectedValue(new Error('message'));

        const result = await getData();
        expect(result).toBe(false);
    });
});
