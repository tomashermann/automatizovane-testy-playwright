import { Locator, Page } from '@playwright/test';

export class SauceLabsPage {
    page: Page
    backToProducts: Locator;
    image: Locator;
    title: Locator;
    description: Locator;
    price: Locator;
    addToCartButton: Locator
    removeButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.backToProducts = page.locator('#back-to-products');
        this.image = page.locator('.inventory_details_img');
        this.title = page.getByText('Sauce Labs Backpack');
        this.description = page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        this.price = page.getByText('$29.99');
        this.addToCartButton = page.locator('#add-to-cart');
        this.removeButton = page.locator('#remove-sauce-labs-backpack');
        }
}
