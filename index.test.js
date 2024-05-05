import { getPercent } from "./index.js";
describe('test getPercent function', () => {
  it('should return 60', () => expect(getPercent(30, 200)).toBe(60)),
  it('should return 90', () => expect(getPercent(10, 900)).toBe(90)),
  it('should return 9757,92', () => expect(getPercent(24, 40658)).toBe(9757.92));
  it('should return "Вы ввели не числа!"', () => expect(getPercent('мама', 100)).toBe('Вы ввели не числа!'));
});