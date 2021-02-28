"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
var throttle = function (fn, delay) {
    if (delay === void 0) { delay = 800; }
    if (typeof fn !== "function") {
        throw new TypeError("请输入函数");
    }
    var wait = false;
    var timeout;
    var cancelled = false;
    return [
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (cancelled)
                return;
            if (wait)
                return;
            var res = fn.apply(void 0, args);
            wait = true;
            timeout = window.setTimeout(function () {
                wait = false;
            }, delay);
            return res;
        },
        function () {
            cancelled = true;
            clearTimeout(timeout);
        },
    ];
};
exports.throttle = throttle;
