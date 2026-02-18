import test, { expect } from '../fixtures/basePages';
import { SauceLabsPage } from '../page-objects/sauceLabsPage';

    test.describe('Home tests', () => {
        test.beforeEach(async ({ loginPage }) => {
            await loginPage.goToLoginPage();
            await loginPage.loginWithValidCredentials();
        });
    
    test('Verify home title and filter dropdown @Regression,@Smoke', async ({ homePage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that the home page title and filter dropdown are visible' 
        });
        await test.step('Verify home page title', async () => {
            await expect(homePage.title).toBeVisible();
        });
    });

    test('Verify if all elements on home page are visible @Regression,@Smoke', async ({ homePage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that all elements on the home page are visible' 
        });
        await test.step('Verify all items on home page', async () => {
            await expect(homePage.item1).toBeVisible();
            await expect(homePage.item2).toBeVisible();
            await expect(homePage.item3).toBeVisible();
            await expect(homePage.item4).toBeVisible();
            await expect(homePage.item5).toBeVisible();
            await expect(homePage.item6).toBeVisible();
        });
        await test.step('Verify all add to cart buttons on home page', async () => {
            await expect(homePage.addToCartButton1).toBeVisible();
            await expect(homePage.addToCartButton2).toBeVisible();
            await expect(homePage.addToCartButton3).toBeVisible();
            await expect(homePage.addToCartButton4).toBeVisible();
            await expect(homePage.addToCartButton5).toBeVisible();
            await expect(homePage.addToCartButton6).toBeVisible();
         });
         await test.step('Verify shopping cart badge and filter dropdown on home page', async () => {
            await expect(homePage.shoppingCartBadge).toBeVisible();
            await expect(homePage.filterDropdown).toBeVisible();
         });
         await test.step('Verify home page title and products title', async () => {
            await expect(homePage.title).toBeVisible();
            await expect(homePage.title2).toBeVisible();
         });
    });
});