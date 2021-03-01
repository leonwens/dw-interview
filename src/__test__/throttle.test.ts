import { throttle } from "../index";
jest.useFakeTimers();

describe("test throttle", () => {
  let func: jest.Mock;
  let debouncedFunc: any;

  beforeEach(() => {
    func = jest.fn();
    [debouncedFunc] = throttle(func, 1000);
  });

  test("execute just once", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }
    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
});
