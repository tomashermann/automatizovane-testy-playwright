import test, { expect } from '../fixtures/basePages';

test.describe('Sauce Labs Bolt T-shirt', () => {
    test.beforeEach(async ({ loginPage, homePage }) => {
        await loginPage.goToLoginPage();
        await loginPage.loginWithValidCredentials();
    });

    test('Verify that the Sauce Labs Bolt T-shirt product page displays correct information @Regression', async ({ homePage, sauceLabsBoltTshirtPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the Sauce Labs Bolt T-shirt product page displays the correct information such as product name, description, price, and add to cart button' 
        });
        await test.step('Navigate to the Sauce Labs Bolt T-shirt product page', async () => {
            await homePage.clickOnItem3();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=1");
        });
        await test.step('Verify product information is displayed correctly', async () => {
            await expect(sauceLabsBoltTshirtPage.image).toBeVisible();
            await expect(sauceLabsBoltTshirtPage.title).toBeVisible();
            await expect(sauceLabsBoltTshirtPage.title).toHaveText('Sauce Labs Bolt T-Shirt');
            await expect(sauceLabsBoltTshirtPage.description).toBeVisible();
            await expect(sauceLabsBoltTshirtPage.description).toHaveText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
            await expect(sauceLabsBoltTshirtPage.price).toBeVisible();
            await expect(sauceLabsBoltTshirtPage.price).toHaveText('$15.99');
            await expect(sauceLabsBoltTshirtPage.addToCartButton).toBeVisible();
            await expect(sauceLabsBoltTshirtPage.addToCartButton).toHaveText('Add to cart');
        });
    });
});