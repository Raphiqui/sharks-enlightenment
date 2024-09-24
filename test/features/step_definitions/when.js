const { When } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

When("I navigate to the home page", { timeout: 5000 }, async function () {
  this.browser = await chromium.launch();
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto("http://localhost:3000"); // Adjust the URL to match your local server
});
