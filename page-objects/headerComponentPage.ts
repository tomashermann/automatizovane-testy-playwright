import { Locator, Page } from '@playwright/test';

export class HeaderComponentPage {
    page: Page
    menuButton: Locator;
    shoppingCartButton: Locator
    shoppingCartBadge: Locator

    constructor(page: Page) {
        this.page = page;
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.shoppingCartButton = page.locator('#shopping_cart_container');
        this.shoppingCartBadge = page.locator('//span[@class="shopping_cart_badge"]');
    }
}
