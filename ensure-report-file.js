const fs = require("fs");
const path = require("path");

const reportFilePath = path.join(__dirname, "test/report/cucumber_report.json");

// Ensure the directory exists
const reportDir = path.dirname(reportFilePath);
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

// Ensure the file exists
if (!fs.existsSync(reportFilePath)) {
  fs.writeFileSync(reportFilePath, JSON.stringify([]));
}
