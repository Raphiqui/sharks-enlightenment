const { When } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

When("I navigate to the home page", { timeout: 10000 }, async function () {
  this.browser = await chromium.launch();
  this.context = await this.browser.newContext({ locale: "en-US" });
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

When("I navigate to the species page", { timeout: 10000 }, async function () {
  this.browser = await chromium.launch();
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto("http://localhost:3000/home/species");
});

When(
  "I navigate to the {string} specie page",
  { timeout: 10000 },
  async function (specieExpected) {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    specieMapping = {
      first: "blue_shark",
      second: "bronze_whale_shark",
    };

    await this.page.goto(
      `http://localhost:3000/home/shark_species/${specieMapping[specieExpected]}`
    );
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

When(
  "I pick {string} as main language",
  { timeout: 10000 },
  async function (expectedLanguage) {
    const languageMapping = {
      french: "fr",
      spanish: "es",
    };

    const langCode = languageMapping[expectedLanguage];
    const selector = `[data-test-id="${langCode}"]`;

    // Wait for Vue to hydrate (Vue 3 component renders will have __vnode)
    await this.page.waitForFunction((sel) => {
      const el = document.querySelector(sel);
      return el && !!el.__vnode;
    }, selector);

    // Click the first element found, most likely the desktop version
    await this.page.locator(selector).first().click();
  }
);
