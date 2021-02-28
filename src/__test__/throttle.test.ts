import { throttle } from "../index";

describe("65593662", () => {
  describe("throttle", () => {
    it("should call function if wait is false", () => {
      const fn = jest.fn();
      const [throttleFn] = throttle(fn, 1000);
      throttleFn("param");
      jest.advanceTimersByTime(1000);
      expect(fn).toBeCalledWith("param");
      expect(fn).toBeCalledTimes(1);
    });
    it("should not call function once if timeoutID exists", () => {
      const fn = jest.fn();
      const [throttleFn] = throttle(fn, 1000);
      throttleFn("param");
      throttleFn("param");
      throttleFn("param");
      jest.runAllTimers();
      expect(fn).toBeCalledWith("param");
      expect(fn).toBeCalledTimes(1);
    });
  });
});
