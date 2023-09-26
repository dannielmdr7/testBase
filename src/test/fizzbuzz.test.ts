import { FizzBuzz } from "../core/fizzbuzz";

describe('fizzbuzz testing', () => {

  it('prueba', () => {
    expect(true).toBe(true)
  });

  it('should return 1 if recive 1', () => {
    expect(FizzBuzz(1)).toBe(1);
  });

  it('should return Fizz if recive 3',() => {
    expect(FizzBuzz(3)).toMatch('Fizz')
  });

  it('should return Buzz if recive 5',() => {
    expect(FizzBuzz(5)).toMatch('Buzz')
  });

  it('should return FizzBuzz if recive 15',() => {
    expect(FizzBuzz(15)).toMatch('FizzBuzz')
  });

  it('should return Fizz if recive any number divisible by 3',() => {
    expect(FizzBuzz(9)).toMatch('Fizz')
  });

  it('should return Buzz if recive any number divisible by 5',() => {
    expect(FizzBuzz(20)).toMatch('Buzz')
  });

  it('should return BuzzBuzz if recive any number divisible by 15',() => {
    expect(FizzBuzz(45)).toMatch('FizzBuzz')
  });


})