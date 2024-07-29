import { Page } from "@playwright/test";

export class SettingsPage{
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }
    async getTitle(){
        return await this.page.title();
    }
}