import test, { expect } from '../fixtures/basePages';
import { SauceLabsPage } from '../page-objects/sauceLabsPage';

test.describe('Home tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
        await loginPage.loginWithValidCredentials();
    });
    
    test('verify that all elements on the home page are visible @Regression,@Smoke', async ({ homePage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that all elements on the home page are visible' 
        });
        await test.step('Verify that the cart badge is visible', async () => {
            await expect(homePage.shoppingCartBadge).toBeVisible();
        });
        await test.step('Verify that the title is visible', async () => {
            await expect(homePage.title).toBeVisible();
        });
        await test.step('Verify that the filter dropdown is visible', async () => {
            await expect(homePage.filterDropdown).toBeVisible();
        });
        await test.step('Verify that the products title is visible', async () => {
            await expect(homePage.title2).toBeVisible();
        });
        await test.step('Verify that all items are visible', async () => {
            await expect(homePage.item1).toBeVisible();
            await expect(homePage.item2).toBeVisible();
            await expect(homePage.item3).toBeVisible();
            await expect(homePage.item4).toBeVisible();
            await expect(homePage.item5).toBeVisible();
            await expect(homePage.item6).toBeVisible();
         });
        await test.step('Verify that all add to cart buttons are visible', async () => {
            await expect(homePage.addToCartButton1).toBeVisible();
            await expect(homePage.addToCartButton2).toBeVisible();
            await expect(homePage.addToCartButton3).toBeVisible();
            await expect(homePage.addToCartButton4).toBeVisible();
            await expect(homePage.addToCartButton5).toBeVisible();
            await expect(homePage.addToCartButton6).toBeVisible();
         });
    });

    test('verify that a user can click on an item and is redirected to the correct page @Regression,@Smoke', async ({ page, homePage, sauceLabsPage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that a user can click on an item and is redirected to the correct page' 
        });
        await test.step('Click on the first item', async () => {
            await homePage.clickOnItem1();
        await test.step('Verify that the user is redirected to the correct page', async () => {
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
        await test.step('Verify that the item details are visible', async () => {
            await expect(sauceLabsPage.image).toBeVisible();
            await expect(sauceLabsPage.title).toBeVisible();
            await expect(sauceLabsPage.description).toBeVisible();
            await expect(sauceLabsPage.price).toBeVisible();
            await expect(sauceLabsPage.addToCartButton).toBeVisible();
                
                });
            });
        });
    });
});
