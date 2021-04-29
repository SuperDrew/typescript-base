import {
  areAnagrams,
  findAnagrams,
  findGroupsOfAnagrams,
} from "../main/anagrams";
import * as fs from "fs";

describe("the anagrams thing", () => {
  describe("acceptance tests", () => {
    it("should pass the simple acceptance test", () => {
      const input = `
    word
    drow
    asd
    `;
      const output = findAnagrams(input);
      expect(output).toStrictEqual([["asd"], ["drow", "word"]]);
    });

    it("should work out the right number of anagram groups in the huge file", () => {
      console.log(process.cwd());
      const stringInput = fs.readFileSync("./src/test/anagrams.txt", "utf8");
      const anagramGroups = findAnagrams(stringInput);
      expect(anagramGroups.length).toBe(20683);
    });
  });

  describe("inner loop", () => {
    it("should return an empty output when passed an empty list", () => {
      const input: string[] = [];
      expect(findGroupsOfAnagrams(input)).toStrictEqual([]);
    });

    it("should return one word given one word input", () => {
      const input: string[] = ["anyword"];
      expect(findGroupsOfAnagrams(input)).toStrictEqual([["anyword"]]);
    });

    it("should group two anagrams", () => {
      const input: string[] = ["ab", "ba"];
      expect(findGroupsOfAnagrams(input)).toStrictEqual([["ab", "ba"]]);
    });

    it("should group three anagrams", () => {
      const input: string[] = ["aab", "baa", "aba"];
      expect(findGroupsOfAnagrams(input)).toStrictEqual([
        ["aab", "aba", "baa"],
      ]);
    });

    it("should group 2 sets of anagrams", () => {
      const input: string[] = ["ab", "ba", "cd", "dc"];
      expect(findGroupsOfAnagrams(input)).toStrictEqual([
        ["ab", "ba"],
        ["cd", "dc"],
      ]);
    });

    describe("anagram detector", () => {
      it("should return true if two words are anagrams of each other", () => {
        const inputA = "ab";
        const inputB = "ba";
        expect(areAnagrams(inputA, inputB)).toBe(true);
      });

      it("should return false if two words are not anagrams of each other", () => {
        const inputA = "a";
        const inputB = "b";
        expect(areAnagrams(inputA, inputB)).toBe(false);
      });
    });
  });
});
