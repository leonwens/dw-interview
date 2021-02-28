"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe("65593662", function () {
    describe("throttle", function () {
        it("should call function if wait is false", function () {
            var fn = jest.fn();
            var throttleFn = index_1.throttle(fn, 1000)[0];
            throttleFn("param");
            jest.advanceTimersByTime(1000);
            expect(fn).toBeCalledWith("param");
            expect(fn).toBeCalledTimes(1);
        });
        it("should not call function once if timeoutID exists", function () {
            var fn = jest.fn();
            var throttleFn = index_1.throttle(fn, 1000)[0];
            throttleFn("param");
            throttleFn("param");
            throttleFn("param");
            jest.runAllTimers();
            expect(fn).toBeCalledWith("param");
            expect(fn).toBeCalledTimes(1);
        });
    });
});
