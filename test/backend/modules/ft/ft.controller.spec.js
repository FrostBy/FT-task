const httpMocks = require('node-mocks-http')
const {handlebars} = require('../../../../backend/modules/ft/ft.controller')

process.env.NODE_ENV = 'test';

const request = httpMocks.createRequest();
const response = httpMocks.createResponse();

jest.doMock('../../../../backend/modules/ft/ft.service', () => {
    return {
        getData: jest.fn(() => Promise.resolve([]))
    }
});

describe('Testing the ft.controller', () => {
    it("should return template from handlebars", async () => {
        const spy = jest.spyOn(response, 'render')
        await handlebars(request, response);

        expect(response.statusCode).toBe(200);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(response._getRenderData()).toEqual({
            pageTitle: 'Financial Times',
            content: { header: 'Financial Times', items: [], error: undefined }
        });
        expect(response._getRenderView()).toEqual('handlebars/home')
    });
});
