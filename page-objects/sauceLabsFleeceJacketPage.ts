import { Locator, Page } from '@playwright/test';

export class SauceLabsFleeceJacketPage {
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
        this.image = page.getByTestId('item-sauce-labs-fleece-jacket-img');
        this.title = page.getByTestId('inventory-item-name');
        this.description = page.getByTestId('inventory-item-desc');
        this.price = page.getByTestId('inventory-item-price');
        this.addToCartButton = page.locator('#add-to-cart');
        this.removeButton = page.locator('#remove');
    }
    async clickAddToCartButton(){
        await this.addToCartButton.click();
    }
    async clickRemoveButton(){
        await this.removeButton.click();
    }
}   
