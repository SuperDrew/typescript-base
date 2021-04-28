export const findAnagrams = (input: string) => {
  const inputWords: string[] = parseInput(input);
  return findGroupsOfAnagrams(inputWords)
};

function parseInput(input: string): string[] {
  return input.split("\n").map(word => word.trim()).filter(word => word !== "")
}

export function findGroupsOfAnagrams(input: string[]): string[][] {
  const groups: Record<string, string[]> = {}

  for (const word of input) {
    const key = anagramKey(word)
    if (!(key in groups)) {
      groups[key] = []
    }
    groups[key].push(word)
  }
  return Object.keys(groups).sort().map(key => groups[key].sort())
}

function anagramKey(input: string): string {
  return Array.from(input).sort().join("");
}

export function areAnagrams(inputA: string, inputB: string) {
  const key1 = anagramKey(inputA);
  const key2 = anagramKey(inputB);
  return key1 === key2;
}
