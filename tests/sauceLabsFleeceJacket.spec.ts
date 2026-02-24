import test, { expect } from '../fixtures/basePages';

test.describe('Sauce Labs Fleece Jacket', () => {
    test.beforeEach(async ({ loginPage, homePage }) => {
        await loginPage.goToLoginPage();
        await loginPage.loginWithValidCredentials();
    });
    
    test('Verify that the Sauce Labs Fleece Jacket product page displays correct information @Regression', async ({ homePage, sauceLabsFleeceJacketPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the Sauce Labs Fleece Jacket product page displays the correct information such as product name, description, price, and add to cart button' 
        });
        await test.step('Navigate to the Sauce Labs Fleece Jacket product page', async () => {
            await homePage.clickOnItem4();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=5");
        });
        await test.step('Verify product information is displayed correctly', async () => {
            await expect(sauceLabsFleeceJacketPage.image).toBeVisible();
            await expect(sauceLabsFleeceJacketPage.title).toBeVisible();
            await expect(sauceLabsFleeceJacketPage.title).toHaveText('Sauce Labs Fleece Jacket');
            await expect(sauceLabsFleeceJacketPage.description).toBeVisible();
            await expect(sauceLabsFleeceJacketPage.description).toHaveText("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
            await expect(sauceLabsFleeceJacketPage.price).toBeVisible();
            await expect(sauceLabsFleeceJacketPage.price).toHaveText('$49.99');
            await expect(sauceLabsFleeceJacketPage.addToCartButton).toBeVisible();
            await expect(sauceLabsFleeceJacketPage.addToCartButton).toHaveText('Add to cart');
        });
    });
});