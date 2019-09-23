import {currencyFormatter} from './formatter';

describe("currencyFormatter", () => {
    it('should format number to US currency', () => {
        expect(currencyFormatter(123.455)).toBe("$123.46");
        expect(currencyFormatter(123.454)).toBe("$123.45");
        expect(currencyFormatter(1234.5)).toBe("$1,234.50");
    });
});