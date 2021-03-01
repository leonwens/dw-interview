"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
jest.useFakeTimers();
describe("test throttle", function () {
    var func;
    var debouncedFunc;
    beforeEach(function () {
        func = jest.fn();
        debouncedFunc = index_1.throttle(func, 1000)[0];
    });
    test("execute just once", function () {
        for (var i = 0; i < 100; i++) {
            debouncedFunc();
        }
        jest.runAllTimers();
        expect(func).toBeCalledTimes(1);
    });
});
