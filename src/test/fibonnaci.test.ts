import { fibonacci } from "../core/fibonnacci"

describe('Serie de Fibonnaci', () => {
  it('should return 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('return one if recive one',() => {
    expect(fibonacci(1)).toBe(1)
  });

  it('return 1 if recive 2', () => {
    expect(fibonacci(2)).toBe(1)
  });

  it('return 2 if recive 3', () => {
    expect(fibonacci(3)).toBe(2)
  });

})