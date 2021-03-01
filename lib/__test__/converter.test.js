"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
test("test converter", function () {
    expect(index_1.converter(12345678)).toBe("1234.57万");
    expect(index_1.converter(1234)).toBe("1234");
    expect(index_1.converter(123456789)).toBe("1.23亿");
    expect(index_1.converter(1200000200)).toBe("12亿");
});
