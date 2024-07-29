import { Given, Then, When } from "@cucumber/cucumber";
import { RegisterPage } from "../pages/registerPage";
import { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ActivateTrackerPage } from "../pages/activateTrackerPage";

let browser: Browser;
let page: Page;
let context: BrowserContext;

Given('I navigate to the {string}', async function (url: string) {
    // Launch the browser and create a new context and page
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext(); // Create a new context here
    page = await context.newPage(); // Use context to create a new page

    // Add cookies to the context before navigating
    await context.addCookies([{
      name: 'interview',
      value: '7lBPV9iik6r9MNE5dKw9nzF9CstdlEJl',
      domain: 'my-stage.tractive.com',
      path:'/'
    }]);
    // Navigate to the provided URL
    await page.goto(url);
});



When('I click Create Account', async function () {
  var loginPage = new LoginPage(page);
  await loginPage.navigateToRegister();
});

  When('I enter {string} for First name, {string} for last name {string} for email and {string} password.', async function (firstName, lastName, email, password) {
    const registerPage = new RegisterPage(page);
    registerPage.register(firstName, lastName, email, password);
  
  });

  Then('I should see an error {string}', async function (error) {
      const errorLocator = await page.getByText(error);
      expect(errorLocator).toBeVisible();
  });

  When('I click submit', async function () {
    const registerPage = new RegisterPage(page);
    registerPage.submit();
  });

  Then('I should see the page for enrolling the tracker', async function () {
    const activateTrackerPage = new ActivateTrackerPage(page);
    expect(activateTrackerPage.title.textContent()).toBe('Tracker ID');
  });