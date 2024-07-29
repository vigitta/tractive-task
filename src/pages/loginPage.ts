import { Locator, Page } from "@playwright/test";

export class LoginPage{

  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly createAccount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator('input[type="email"]');
    this.password = page.locator('input[type="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.createAccount = page.getByText('Create Account');
  }

  async login(userName: string, password: string){
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async navigateToRegister(){
    await this.createAccount.click();
  }

}