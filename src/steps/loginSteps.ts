import { Given, When, Then } from '@cucumber/cucumber';
import {chromium, Page, Browser, expect,BrowserContext } from "@playwright/test";
import { LoginPage } from '../pages/loginPage';
import { SettingsPage } from '../pages/settingsPage';

let browser: Browser;
let page: Page;
let context: BrowserContext;
let loginPage: LoginPage;

Given('I navigate to {string}', async function (url: string) {
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
    loginPage = new LoginPage(page);
    // Navigate to the provided URL
    await page.goto(url);
});

When('I enter {string} and {string} and log in', async function (userName, password) {     
    
    loginPage.login(userName, password);
});

Then('I should see settings page with title {string}', async function (title) {
  const settingsPage = new SettingsPage(page);
  expect(await settingsPage.getTitle(), title);
});
