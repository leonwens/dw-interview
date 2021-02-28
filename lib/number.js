"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converter = void 0;
function converter(data, toFixedCount) {
    if (toFixedCount === void 0) { toFixedCount = 2; }
    if (data === undefined || data === null) {
        return "0";
    }
    if (typeof data !== "string" && typeof data !== "number") {
        throw new TypeError("请输入数字字符串或者数字");
    }
    if (typeof data === "string") {
        if (isNaN(+data)) {
            throw new TypeError("请输入数字字符串或者数字");
        }
    }
    var tenThousand = 10000;
    var hundredMillion = tenThousand * tenThousand;
    var trillion = hundredMillion * tenThousand;
    var realNumber = +data;
    var positiveNumber = Math.abs(realNumber);
    if (positiveNumber < 10000) {
        return "" + realNumber;
    }
    if (positiveNumber < hundredMillion) {
        var resNumber = positiveNumber / tenThousand;
        if (parseInt(String(resNumber), 10) === +resNumber.toFixed(toFixedCount)) {
            return parseInt(String(realNumber / tenThousand), 10) + "\u4E07";
        }
        return (realNumber / tenThousand).toFixed(toFixedCount) + "\u4E07";
    }
    if (positiveNumber < trillion) {
        var resNumber = positiveNumber / hundredMillion;
        if (parseInt(String(resNumber), 10) === +resNumber.toFixed(toFixedCount)) {
            return parseInt(String(realNumber / hundredMillion), 10) + "\u4EBF";
        }
        return (realNumber / hundredMillion).toFixed(toFixedCount) + "\u4EBF";
    }
    if (positiveNumber <= Number.MAX_SAFE_INTEGER) {
        var resNumber = positiveNumber / trillion;
        if (parseInt(String(resNumber), 10) === +resNumber.toFixed(toFixedCount)) {
            return parseInt(String(realNumber / trillion), 10) + "\u4E07\u4EBF";
        }
        return (realNumber / trillion).toFixed(toFixedCount) + "\u4E07\u4EBF";
    }
    return "超过了MAX_SAFE_INTEGER大小";
}
exports.converter = converter;
