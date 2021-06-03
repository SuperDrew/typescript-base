import {convertToBooleanWithDefaultTrue} from "../main/example";

describe('example test', () => {
    it('should transform a boolean true string to an actual boolean', () => {
        expect(convertToBooleanWithDefaultTrue('true')).toStrictEqual(true);
    });

    it('should transform a boolean false string to an actual boolean', () => {
        expect(convertToBooleanWithDefaultTrue('false')).toStrictEqual(false);
    });

    it('should transform sslEnabled to true if the input string isnt true or false', () => {
        expect(convertToBooleanWithDefaultTrue('sdfgkhusdf')).toStrictEqual(true);
    });
})