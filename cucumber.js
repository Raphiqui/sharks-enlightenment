module.exports = {
  default: {
    require: [
      "features/step_definitions/given.js",
      "features/step_definitions/when.js",
      "features/step_definitions/then.js",
    ],
    format: ["json:test/report/cucumber_report.json"],
    paths: ["features/**/*.feature"],
  },
};
