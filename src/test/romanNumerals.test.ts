import { convertToRomanNumeral } from "../main/romanNumerals";

describe("roman numerals", () => {
  it.each([
    [1, "I"],
    [4, "IV"],
    [1000, "M"],
    [1990, "MCMXC"],
    [2008, "MMVIII"],
    [1444, "MCDXLIV"],
  ])(
    "should convert numeric %d to roman numeral %s",
    (number: number, numeral: string) => {
      expect(convertToRomanNumeral(number)).toBe(numeral);
    }
  );
});
