const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "test/report/cucumber_report.json", // Ensure this path matches the output path in your test command
  output: "test/report/cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "0.0.1",
    "Test Environment": "STAGING",
    Browser: "Chrome  54.0.2840.98",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);
