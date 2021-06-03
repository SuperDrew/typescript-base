module.exports = {
  packageManager: "npm",
  mutate: ['src/main/*.ts'],
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  jest: {
    enableFindRelatedTests: true,
    configFile: './jest.config.js'
  },
  coverageAnalysis: 'perTest'
};
