import { suma } from "../core/sum";

test('should sum two numbers', () => {
  const a = 1;
  const b = 2;
  const expected = 3;
  const result = suma(a, b);
  expect(result).toBe(expected);
});