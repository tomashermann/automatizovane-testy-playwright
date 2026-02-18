import { Locator, Page } from '@playwright/test';

export class HomePage {
    page: Page
    item1: Locator;
    item2: Locator;
    item3: Locator;
    item4: Locator;
    item5: Locator;
    item6: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.item1 = page.locator('#item_4_title_link');
        this.item2 = page.locator('#item_0_title_link');
        this.item3 = page.locator('#item_1_title_link');
        this.item4 = page.locator('#item_5_title_link');
        this.item5 = page.locator('#item_2_title_link');
        this.item6 = page.locator('#item_3_title_link');
    }
}