import { Locator, Page } from "@playwright/test";

export class RegisterPage{
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly createAccountButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.firstName = page.locator('input[name="firstName"]');
        this.lastName = page.locator('input[name="lastName"]');
        this.email = page.locator('input[name="email"]');
        this.password = page.locator('input[type="password"]');
        this.createAccountButton = page.locator('button[type="submit"]');
    }
    
async register(first_name:string,last_name:string,email:string,password:string){
    await this.firstName.fill(first_name);
    await this.lastName.fill(last_name);
    await this.email.fill(email);
    await this.password.fill(password);
    
}
async submit(){
    await this.createAccountButton.click();
}

}