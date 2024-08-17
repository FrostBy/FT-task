module.exports = {
    checkIf: (v1, operator, v2, options) =>{
        const operators = {
            '==': function (a, b) {
                return a == b
            },
            '===': function (a, b) {
                return a === b
            },
            '!=': function (a, b) {
                return a != b
            },
            '!==': function (a, b) {
                return a !== b
            },
            '<': function (a, b) {
                return a < b
            },
            '<=': function (a, b) {
                return a <= b
            },
            '>': function (a, b) {
                return a > b
            },
            '>=': function (a, b) {
                return a >= b
            },
            '&&': function (a, b) {
                return a && b
            },
            '||': function (a, b) {
                return a || b
            },
        }
        const isTrue = operators[operator](v1, v2);
        return isTrue ? options.fn(this) : options.inverse(this);
    },
    toFixed: (v1, precision) =>{
        return v1.toFixed(precision);
    }
}