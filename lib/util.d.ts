declare type IBasicFunc = (...args: any[]) => any;
export declare const throttle: <T extends IBasicFunc>(fn: T, delay?: number) => [T | (() => void), () => void];
export {};
