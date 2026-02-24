import test, { expect } from '../fixtures/basePages';

test.describe('Sauce Labs Red T-Shirt', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
        await loginPage.loginWithValidCredentials();
    });

    test('Verify that the Sauce Labs Red T-Shirt product page displays correct information @Regression', async ({ homePage, sauceLabsRedTshirtPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the Sauce Labs Red T-Shirt product page displays the correct information such as product name, description, price, and add to cart button' 
        });
        await test.step('Navigate to the Sauce Labs Red T-Shirt product page', async () => {
            await homePage.clickOnItem6();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=3");
        });
        await test.step('Verify product information is displayed correctly', async () => {
            await expect(sauceLabsRedTshirtPage.image).toBeVisible();
            await expect(sauceLabsRedTshirtPage.title).toBeVisible();
            await expect(sauceLabsRedTshirtPage.title).toHaveText('Test.allTheThings() T-Shirt (Red)');
            await expect(sauceLabsRedTshirtPage.description).toBeVisible();
            await expect(sauceLabsRedTshirtPage.description).toHaveText('This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.');
            await expect(sauceLabsRedTshirtPage.price).toBeVisible();
            await expect(sauceLabsRedTshirtPage.price).toHaveText('$15.99');
            await expect(sauceLabsRedTshirtPage.addToCartButton).toBeVisible();
            await expect(sauceLabsRedTshirtPage.addToCartButton).toHaveText('Add to cart');
        });
    });
    test('Verify that the user can add the Sauce Labs Red T-Shirt to the cart @Regression', async ({ homePage, sauceLabsRedTshirtPage, headerComponentPage, page }) => {
        test.info().annotations.push({
            type: 'Test',
            description: 'this test verifies that the user can add the Sauce Labs Red T-Shirt to the cart and that it appears in the cart with the correct information'
        });
        await test.step('Navigate to the Sauce Labs Red T-Shirt product page', async () => {
            await homePage.clickOnItem6();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=3");
        });
        await test.step('Add the product to the cart', async () => {
            await sauceLabsRedTshirtPage.addToCartButton.click();
            await expect(headerComponentPage.shoppingCartBadge).toBeVisible();
            await expect(headerComponentPage.shoppingCartBadge).toHaveText('1');
        });
    });
    test('Verify that the user can remove the Sauce Labs Red T-Shirt from the cart @Regression', async ({ homePage, sauceLabsRedTshirtPage, headerComponentPage, page }) => {
        test.info().annotations.push({
            type: 'Test',
            description: 'this test verifies that the user can remove the Sauce Labs Red T-Shirt from the cart and that it is removed from the cart successfully'
        });
        await test.step('Navigate to the Sauce Labs Red T-Shirt product page', async () => {
            await homePage.clickOnItem6();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=3");
        });
        await test.step('Add the product to the cart', async () => {
            await sauceLabsRedTshirtPage.addToCartButton.click();
            await expect(headerComponentPage.shoppingCartBadge).toBeVisible();
            await expect(headerComponentPage.shoppingCartBadge).toHaveText('1');
        });
        await test.step('Remove the product from the cart', async () => {
            await sauceLabsRedTshirtPage.removeButton.click();
            await expect(headerComponentPage.shoppingCartBadge).not.toBeVisible();
        });
    });
    test('Verify that the user can navigate back to the products page from the Sauce Labs Red T-Shirt product page @Regression', async ({ homePage, sauceLabsRedTshirtPage, page }) => {
        test.info().annotations.push({
            type: 'Test',
            description: 'this test verifies that the user can navigate back to the products page from the Sauce Labs Red T-Shirt product page successfully'
        });
        await test.step('Navigate to the Sauce Labs Red T-Shirt product page', async () => {
            await homePage.clickOnItem6();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=3");
        });
        await test.step('Navigate back to the products page', async () => {
            await sauceLabsRedTshirtPage.clickBackToProductsButton();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        });
        await test.step('Verify that the user is navigated back to the products page successfully', async () => {
            await homePage.checkAllElements();
        });
    });
});