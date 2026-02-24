import test, { expect } from '../fixtures/basePages';

test.describe('Sauce Labs Bike Light tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
        await loginPage.loginWithValidCredentials();
    });

    test('Verify that the Sauce Labs Bike Light product page displays correct information @Regression', async ({ homePage, sauceLabsBikeLightPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the Sauce Labs Bike Light product page displays the correct information such as product name, description, price, and add to cart button' 
        });
        await test.step('Navigate to the Sauce Labs Bike Light product page', async () => {
            await homePage.clickOnItem2();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=0");
        });
        await test.step('Verify product information is displayed correctly', async () => {
            await expect(sauceLabsBikeLightPage.image).toBeVisible();
            await expect(sauceLabsBikeLightPage.title).toBeVisible();
            await expect(sauceLabsBikeLightPage.title).toHaveText('Sauce Labs Bike Light');
            await expect(sauceLabsBikeLightPage.description).toBeVisible();
            await expect(sauceLabsBikeLightPage.description).toHaveText('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
            await expect(sauceLabsBikeLightPage.price).toBeVisible();
            await expect(sauceLabsBikeLightPage.price).toHaveText('$9.99');
            await expect(sauceLabsBikeLightPage.addToCartButton).toBeVisible();
            await expect(sauceLabsBikeLightPage.addToCartButton).toHaveText('Add to cart');
        });
    });
    test('Verify that the user can add the Sauce Labs Bike Light to the cart @Regression', async ({ homePage, sauceLabsBikeLightPage, headerComponentPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the user can add the Sauce Labs Bike Light to the cart and that it appears in the cart with the correct information' 
        });
        await test.step('Navigate to the Sauce Labs Bike Light product page', async () => {
            await homePage.clickOnItem2();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=0");
        });
        await test.step('Add the product to the cart', async () => {
            await sauceLabsBikeLightPage.addToCartButton.click();
            await expect(headerComponentPage.shoppingCartBadge).toBeVisible();
            await expect(headerComponentPage.shoppingCartBadge).toHaveText('1');
        });
    });
    test('Verify that the user can remove the Sauce Labs Bike Light from the cart @Regression', async ({ homePage, sauceLabsBikeLightPage, headerComponentPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the user can remove the Sauce Labs Bike Light from the cart and that it is removed from the cart successfully' 
        });
        await test.step('Navigate to the Sauce Labs Bike Light product page', async () => {
            await homePage.clickOnItem2();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=0");
        });
        await test.step('Add the product to the cart', async () => {
            await sauceLabsBikeLightPage.addToCartButton.click();
            await expect(headerComponentPage.shoppingCartBadge).toBeVisible();
            await expect(headerComponentPage.shoppingCartBadge).toHaveText('1');
        });
        await test.step('Remove the product from the cart', async () => {
            await sauceLabsBikeLightPage.removeButton.click();
            await expect(headerComponentPage.shoppingCartBadge).not.toBeVisible();
        });
    });
});