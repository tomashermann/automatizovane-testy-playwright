import test, { expect } from '../fixtures/basePages';

test.describe('Sauce Labs Backpack tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
        await loginPage.loginWithValidCredentials();
    });

    test('Verify that the Sauce Labs Backpack product page displays correct information @Regression', async ({ homePage, sauceLabsBackpackPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the Sauce Labs Backpack product page displays the correct information such as product name, description, price, and add to cart button' 
        });
        await test.step('Navigate to the Sauce Labs Backpack product page', async () => {
            await homePage.clickOnItem1();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=4");
        });
        await test.step('Verify product information is displayed correctly', async () => {
            await expect(sauceLabsBackpackPage.image).toBeVisible();
            await expect(sauceLabsBackpackPage.title).toHaveText('Sauce Labs Backpack');
            await expect(sauceLabsBackpackPage.description).toBeVisible();
            await expect(sauceLabsBackpackPage.description).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
            await expect(sauceLabsBackpackPage.price).toBeVisible();
            await expect(sauceLabsBackpackPage.price).toHaveText('$29.99');
            await expect(sauceLabsBackpackPage.addToCartButton).toBeVisible();
            await expect(sauceLabsBackpackPage.addToCartButton).toHaveText('Add to cart');
        });
    });
    test('Verify that the user can add the Sauce Labs Backpack to the cart @Regression', async ({ homePage, sauceLabsBackpackPage, headerComponentPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the user can add the Sauce Labs Backpack to the cart and that it appears in the cart with the correct information' 
        });
        await test.step('Navigate to the Sauce Labs Backpack product page', async () => {
            await homePage.clickOnItem1();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=4");
        });
        await test.step('Add the product to the cart', async () => {
            await sauceLabsBackpackPage.addToCartButton.click();
            await expect(headerComponentPage.shoppingCartBadge).toBeVisible();
            await expect(headerComponentPage.shoppingCartBadge).toHaveText('1');
           
        });
    });
    test('Verify that the user can remove the Sauce Labs Backpack from the cart @Regression', async ({ homePage, sauceLabsBackpackPage, headerComponentPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the user can remove the Sauce Labs Backpack from the cart and that it is removed from the cart successfully' 
        });
        await test.step('Navigate to the Sauce Labs Backpack product page', async () => {
            await homePage.clickOnItem1();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=4");
        });
        await test.step('Add the product to the cart', async () => {
            await sauceLabsBackpackPage.addToCartButton.click();
            await expect(headerComponentPage.shoppingCartBadge).toBeVisible();
            await expect(headerComponentPage.shoppingCartBadge).toHaveText('1');
        });
        await test.step('Remove the product from the cart', async () => {
            await sauceLabsBackpackPage.removeButton.click();
            await expect(headerComponentPage.shoppingCartBadge).not.toBeVisible();
        });
    });
    test('Verify that the user can navigate back to the home page from the Sauce Labs Backpack product page @Regression', async ({ homePage, sauceLabsBackpackPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the user can navigate back to the home page from the Sauce Labs Backpack product page using the back button and that they are redirected to the home page successfully' 
        });
        await test.step('Navigate to the Sauce Labs Backpack product page', async () => {
            await homePage.clickOnItem1();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=4");
        });
        await test.step('Navigate back to the home page', async () => {
            await sauceLabsBackpackPage.clickBackToProductsButton();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        });
        await test.step('Verify that the user is redirected to the home page successfully', async () => {
            await homePage.checkAllElements();
        });
    });
});