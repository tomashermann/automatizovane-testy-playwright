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
});