import { Locator, Page } from "@playwright/test";

export class ActivateTrackerPage{
    readonly page: Page;
    readonly title: Locator;
    constructor(page: Page) { this.page = page; 
        this.title = page.getByText("Tracker ID");
    }
    

}