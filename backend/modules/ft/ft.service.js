const Axios = require('axios');
const {setupCache} = require('axios-cache-interceptor');
const repository = require('./ft.repository');
const logger = require('../../shared/logger');

const getAxios = function (cache = process.env.FT_API_CACHE || false) {
    const instance = Axios.create();
    return cache ? setupCache(instance) : instance;
}

const fetch = async function (endpoint, path, symbols = {}) {
    const axios = getAxios();
    return axios({
        method: 'GET',
        url: path,
        baseURL: endpoint,
        params: {
            symbols
        }
    })
}

exports.getData = async function (symbols = []) {
    try {
        const response = await fetch(process.env.FT_API_ENDPOINT, process.env.FT_API_QUOTES_PATH, symbols.join(','));
        return response?.data?.data?.items || [];
    } catch (e) {
        logger.error(e.message);
        return false;
    }
}

exports.prepareItems = async function (items, symbols = [], mapNames = true) {
    try {
        const names = repository.getNames(symbols);
        return items.map((item) => {
            return {
                name: mapNames ? names[item.basic.symbol] || item.basic.name : item.basic.name,
                symbol: item.basic.symbol,
                diff: item.quote.change1DayPercent
            };
        })
    } catch (e) {
        logger.error(e.message);
        return false;
    }
}