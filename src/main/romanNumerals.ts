const reduceByFactor = (
  number: number,
  numeral: string,
  romanNumeralMap: RomanNumeralSymbolMap
): RomanNumeralSymbolMap => {
  while (number >= romanNumeralMap.decimalNumber) {
    numeral += romanNumeralMap.romanNumeral;
    number -= romanNumeralMap.decimalNumber;
  }
  return { decimalNumber: number, romanNumeral: numeral };
};

type RomanNumeralSymbolMap = { decimalNumber: number; romanNumeral: string };
const romanNumeralValuesMap: RomanNumeralSymbolMap[] = [
  { decimalNumber: 1, romanNumeral: "I" },
  { decimalNumber: 5, romanNumeral: "V" },
  { decimalNumber: 10, romanNumeral: "X" },
  { decimalNumber: 50, romanNumeral: "L" },
  { decimalNumber: 100, romanNumeral: "C" },
  { decimalNumber: 500, romanNumeral: "D" },
  { decimalNumber: 1000, romanNumeral: "M" },
];

type subtractiveReplacement = {
  priority: number;
  initialRomanNumeral: string;
  subtractiveRomanNumeral: string;
};

const subtractiveReplacements: subtractiveReplacement[] = [
  { priority: 6, initialRomanNumeral: "IIII", subtractiveRomanNumeral: "IV" },
  { priority: 5, initialRomanNumeral: "VIIII", subtractiveRomanNumeral: "IX" },
  { priority: 4, initialRomanNumeral: "XXXX", subtractiveRomanNumeral: "XL" },
  { priority: 3, initialRomanNumeral: "LXXXX", subtractiveRomanNumeral: "XC" },
  { priority: 2, initialRomanNumeral: "CCCC", subtractiveRomanNumeral: "CD" },
  { priority: 1, initialRomanNumeral: "DCCCC", subtractiveRomanNumeral: "CM" },
];

const applySubtractiveNotation = (numeral: string) => {
  let subtractiveNumeral = numeral;
  const orderedByPriorityReplacements = subtractiveReplacements.sort((a, b) => {
    return a.priority - b.priority;
  });

  for (let replacement of orderedByPriorityReplacements) {
    subtractiveNumeral = subtractiveNumeral.replace(
      replacement.initialRomanNumeral,
      replacement.subtractiveRomanNumeral
    );
  }
  return subtractiveNumeral;
};

export const convertToRomanNumeral = (number: number): string => {
  const sortedMap = romanNumeralValuesMap.sort((a, b) => {
    return b.decimalNumber - a.decimalNumber;
  });

  let numeral = "";
  for (let romanNumeralValues of sortedMap) {
    // TODO isn't there a way to directly destruction the object values from the return?
    const newValues = reduceByFactor(number, numeral, romanNumeralValues);
    number = newValues.decimalNumber;
    numeral = newValues.romanNumeral;
  }

  return applySubtractiveNotation(numeral);
};
