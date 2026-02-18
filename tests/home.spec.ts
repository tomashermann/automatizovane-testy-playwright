import test, { expect } from '../fixtures/basePages';

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
});
 