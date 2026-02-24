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
    test('Verify that the user can add the Sauce Labs Bolt T-shirt to the cart @Regression', async ({ homePage, sauceLabsBoltTshirtPage, headerComponentPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the user can add the Sauce Labs Bolt T-shirt to the cart and that it appears in the cart with the correct information' 
        });
        await test.step('Navigate to the Sauce Labs Bolt T-shirt product page', async () => {
            await homePage.clickOnItem3();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=1");
        });
        await test.step('Add the product to the cart', async () => {
            await sauceLabsBoltTshirtPage.addToCartButton.click();
            await expect(headerComponentPage.shoppingCartBadge).toBeVisible();
            await expect(headerComponentPage.shoppingCartBadge).toHaveText('1');
        });
    }); 
    test('Verify that the user can remove the Sauce Labs Bolt T-shirt from the cart @Regression', async ({ homePage, sauceLabsBoltTshirtPage, headerComponentPage, page }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the user can remove the Sauce Labs Bolt T-shirt from the cart and that it is removed from the cart successfully' 
        });
        await test.step('Navigate to the Sauce Labs Bolt T-shirt product page', async () => {
            await homePage.clickOnItem3();
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=1");
        });
        await test.step('Add the product to the cart', async () => {
            await sauceLabsBoltTshirtPage.addToCartButton.click();
            await expect(headerComponentPage.shoppingCartBadge).toBeVisible();
            await expect(headerComponentPage.shoppingCartBadge).toHaveText('1');
        });
        await test.step('Remove the product from the cart', async () => {
            await sauceLabsBoltTshirtPage.removeButton.click();
            await expect(headerComponentPage.shoppingCartBadge).not.toBeVisible();
        });
    });
});