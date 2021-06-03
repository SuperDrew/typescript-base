import {convertToBooleanWithDefaultTrue} from "../main/example";

describe('example test', () => {
    it('should transform a boolean true string to an actual boolean', () => {
        expect(convertToBooleanWithDefaultTrue('true')).toBe(true);
    });

    it('should transform a boolean false string to an actual boolean', () => {
        expect(convertToBooleanWithDefaultTrue('false')).toBe(false);
    });

    it('should transform boolean to true if the input string isnt true or false', () => {
        expect(convertToBooleanWithDefaultTrue('sdfgkhusdf')).toBe(true);
    });
})