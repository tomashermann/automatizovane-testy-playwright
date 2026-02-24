import test, { expect } from '../fixtures/basePages';

test.describe('Sauce Labs Onesie', () => {
    test.beforeEach(async ({ loginPage, homePage }) => {
        await loginPage.goToLoginPage();
        await loginPage.loginWithValidCredentials();
    });
    
    test('Verify that the Sauce Labs Onesie product page displays correct information @Regression', async ({ homePage, sauceLabsOnesiePage, page }) => {
        test.info().annotations.push({
            type: 'Test',
            description: 'this test verifies that the Sauce Labs Onesie product page displays the correct information such as product name, description, price, and add to cart button'
        });
        await test.step('Navigate to the Sauce Labs Onesie product page', async () => {
            await homePage.clickOnItem5();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=2");
        });
        await test.step('Verify product information is displayed correctly', async () => {
            await expect(sauceLabsOnesiePage.image).toBeVisible();
            await expect(sauceLabsOnesiePage.title).toBeVisible();
            await expect(sauceLabsOnesiePage.title).toHaveText('Sauce Labs Onesie');
            await expect(sauceLabsOnesiePage.description).toBeVisible();
            await expect(sauceLabsOnesiePage.description).toHaveText('Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.');
            await expect(sauceLabsOnesiePage.price).toBeVisible();
            await expect(sauceLabsOnesiePage.price).toHaveText('$7.99');
            await expect(sauceLabsOnesiePage.addToCartButton).toBeVisible();
            await expect(sauceLabsOnesiePage.addToCartButton).toHaveText('Add to cart');
        });
    });
    test('Verify that the user can add the Sauce Labs Onesie to the cart @Regression', async ({ homePage, sauceLabsOnesiePage, headerComponentPage, page }) => {
        test.info().annotations.push({
            type: 'Test',
            description: 'this test verifies that the user can add the Sauce Labs Onesie to the cart and that it appears in the cart with the correct information'
        });
        await test.step('Navigate to the Sauce Labs Onesie product page', async () => {
            await homePage.clickOnItem5();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=2");
        });
        await test.step('Add the product to the cart', async () => {
            await sauceLabsOnesiePage.addToCartButton.click();
            await expect(headerComponentPage.shoppingCartBadge).toBeVisible();
            await expect(headerComponentPage.shoppingCartBadge).toHaveText('1');
        });
    });
    test('Verify that the user can remove the Sauce Labs Onesie from the cart @Regression', async ({ homePage, sauceLabsOnesiePage, headerComponentPage, page }) => {
        test.info().annotations.push({
            type: 'Test',
            description: 'this test verifies that the user can remove the Sauce Labs Onesie from the cart and that it is removed from the cart successfully'
        });
        await test.step('Navigate to the Sauce Labs Onesie product page', async () => {
            await homePage.clickOnItem5();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=2");
        });
        await test.step('Add the product to the cart', async () => {
            await sauceLabsOnesiePage.addToCartButton.click();
            await expect(headerComponentPage.shoppingCartBadge).toBeVisible();
            await expect(headerComponentPage.shoppingCartBadge).toHaveText('1');
        });
        await test.step('Remove the product from the cart', async () => {
            await sauceLabsOnesiePage.removeButton.click();
            await expect(headerComponentPage.shoppingCartBadge).not.toBeVisible();
        });
    });
    test('Verify that the user can navigate back to the products page from the Sauce Labs Onesie product page @Regression', async ({ homePage, sauceLabsOnesiePage, page }) => {
        test.info().annotations.push({
            type: 'Test',
            description: 'this test verifies that the user can navigate back to the products page from the Sauce Labs Onesie product page successfully'
        });
        await test.step('Navigate to the Sauce Labs Onesie product page', async () => {
            await homePage.clickOnItem5();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=2");
        });
        await test.step('Navigate back to the products page', async () => {
            await sauceLabsOnesiePage.clickBackToProductsButton();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        });
        await test.step('Verify that the user is navigated back to the products page successfully', async () => {
            await homePage.checkAllElements();
        });
    });
});