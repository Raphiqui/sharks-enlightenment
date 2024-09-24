const { Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Then("I should see the home page", async function () {
  const title = await this.page.title();
  expect(title).toBe("My Amazing Site");
  await this.browser.close();
});
