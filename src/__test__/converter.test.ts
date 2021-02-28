import { converter } from "../index";

test("12345678", () => {
  expect(converter(12345678)).toBe("1234.57万");
  expect(converter(1234)).toBe("1234");
  expect(converter(123456789)).toBe("1.23亿");
  expect(converter(1200000200)).toBe("12亿");
});
