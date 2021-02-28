type IBasicFunc = (...args: any[]) => any;
export const throttle = <T extends IBasicFunc>(
  fn: T,
  delay = 800,
): [T | (() => void), () => void] => {
  if (typeof fn !== "function") {
    throw new TypeError("请输入函数");
  }
  let wait = false;
  let timeout: undefined | number;
  let cancelled = false;
  return [
    (...args: any[]) => {
      if (cancelled) return;
      if (wait) return;
      const res = fn(...args);
      wait = true;
      timeout = window.setTimeout(() => {
        wait = false;
      }, delay);
      return res;
    },
    () => {
      cancelled = true;
      clearTimeout(timeout);
    },
  ];
};
