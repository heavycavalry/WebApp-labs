import { Calculator } from "./calculator";

describe('Calc', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('should return correct sum of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Add(2,2)).toEqual(4);
    });
    it('should return correct sum of subtraction number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Substract(2,2)).toEqual(0);
    });
    it('should return correct multiplication of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Multiply(2,2)).toEqual(4);
    });
    it('should return correct division of two number', () => {
        expect(calc).toBeInstanceOf(Calculator);
        expect(calc.Divide(10,2)).toEqual(5);
    });
});