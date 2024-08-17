const ftService = require('./ft.service');

const getData = async () => {
    const symbols = (process.env.FT_API_SUPPORTED_SYMBOLS || '').split(',');

    const data = await ftService.getData(symbols);
    if (!data) return 'Cannot fetch data';

    const items = ftService.prepareItems(data, symbols)
    if (!items) return 'Cannot build data';

    return items
}

exports.jsx = async function (req, res) {
    const templateData = {
        pageTitle: 'Financial Times',
        content: {
            header: 'Financial Times',
            items: undefined,
            error: undefined,
        }
    };
    const data = await getData(req);

    if (!Array.isArray(data)) {
        templateData.content.error = typeof data === 'string' ? data : 'Internal Server Error';
        return res.status(500).render('jsx/Main.jsx', templateData);
    }

    templateData.content.items = data;
    return res.render('jsx/Main.jsx', templateData);

}

exports.handlebars = async function (req, res) {
    const templateData = {
        pageTitle: 'Financial Times',
        content: {
            header: 'Financial Times',
            items: undefined,
            error: undefined,
        }
    };
    const data = await getData(req);

    if (!Array.isArray(data)) {
        templateData.content.error = typeof data === 'string' ? data : 'Internal Server Error';
        return res.status(500).render('handlebars/error', templateData);
    }

    templateData.content.items = data;
    res.render('handlebars/home', templateData);
}