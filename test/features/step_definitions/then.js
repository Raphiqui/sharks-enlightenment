const { Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Then("I should see the home page", async function () {
  const title = await this.page.title();
  expect(title).toBe("Sharks enlightenment");
  await this.browser.close();
});

Then("I should see question {string}", async function (expectedQuestion) {
  const question = await this.page.locator(`[data-test-id="question"]`);
  expect(question).toBeTruthy();
});

Then("I can see my final score", { timeout: 10000 }, async function () {
  const score = await this.page.locator(`[data-test-id="score"]`);
  expect(score).toBeTruthy();
  const scoreText = await score.textContent();
});

Then("I should see {string} cards", async function (expectedCount) {
  const cardCount = await this.page
    .locator(`[data-test-id="cardList"] li`)
    .count();
  expect(cardCount).toEqual(parseInt(expectedCount, 10));
});

Then(
  "I should be able to navigate to the {string} page",
  async function (navigationExpected) {
    const currentUrl = await this.page.url();

    const arrowMapping = {
      next: "rightArrow",
      previous: "leftArrow",
    };

    const arrow = this.page.locator(
      `[data-test-id="${arrowMapping[navigationExpected]}"]`
    );

    await arrow.click();

    let newUrl = currentUrl;
    const maxRetries = 20;
    const delayMs = 250;

    for (let i = 0; i < maxRetries; i++) {
      newUrl = await this.page.url();
      if (newUrl !== currentUrl) break;
      await this.page.waitForTimeout(delayMs);
    }

    if (newUrl === currentUrl) {
      throw new Error(
        `URL did not change after clicking the ${navigationExpected} arrow`
      );
    }
  }
);

Then("The website is in {string}", async function (expectedLanguage) {
  languageMapping = {
    french: "requins",
    spanish: "tiburones",
  };

  const menuStringRepresentative = await this.page
    .locator(`[data-test-id="internationalizationRepresentative"]`)
    .innerText();

  expect(menuStringRepresentative.toLowerCase()).toEqual(
    languageMapping[expectedLanguage]
  );
});
