const { When } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

When("I navigate to the home page", { timeout: 10000 }, async function () {
  this.browser = await chromium.launch();
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto("http://localhost:3000"); // Adjust the URL to match your local server
});

When(
  "I navigate to the interactive page",
  { timeout: 10000 },
  async function () {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.goto("http://localhost:3000/home/interactive?e2e");
  }
);

When(
  "I answer the question {string}",
  { timeout: 10000 },
  async function (expectedQuestion) {
    const response = await this.page.locator(`[data-test-id="correct"]`);
    response.click();
    const nextButton = await this.page.locator(`[data-test-id="next"]`);
    nextButton.click();
  }
);
