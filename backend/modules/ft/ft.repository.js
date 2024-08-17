const symbolsMapping = require('./symbols');

module.exports = {
    getNames: (symbols) => {
        const mapping = {};
        for (const symbol of symbols) {
            if (symbolsMapping[symbol]) {
                mapping[symbol] = symbolsMapping[symbol];
            }
        }
        return mapping;
    }
}