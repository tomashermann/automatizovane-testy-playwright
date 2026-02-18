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

    test('Verify adding item to cart and cart badge update @Regression,@Smoke', async ({ homePage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that when an item is added to the cart, the cart badge is updated with the correct number of items' 
        });
        await test.step('Add item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton1.click();
            await expect(homePage.cartBadge).toHaveText('1');
            await expect(homePage.removeButtonItem1).toBeVisible();
        });
        await test.step('Add another item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton2.click();
            await expect(homePage.cartBadge).toHaveText('2');
            await expect(homePage.removeButtonItem2).toBeVisible();
         });
        await test.step('Add third item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton3.click();
            await expect(homePage.cartBadge).toHaveText('3');
            await expect(homePage.removeButtonItem3).toBeVisible();
        });
        await test.step('Add fourth item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton4.click();
            await expect(homePage.cartBadge).toHaveText('4');
            await expect(homePage.removeButtonItem4).toBeVisible();
        });
        await test.step('Add fifth item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton5.click();
            await expect(homePage.cartBadge).toHaveText('5');
            await expect(homePage.removeButtonItem5).toBeVisible();
        });
        await test.step('Add sixth item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton6.click();
            await expect(homePage.cartBadge).toHaveText('6');
            await expect(homePage.removeButtonItem6).toBeVisible();
         });
    });

    test('Verifi removing item from cart and cart badge update @Regression,@Smoke', async ({ homePage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that when an item is removed from the cart, the cart badge is updated with the correct number of items' 
        });

        await test.step('Add item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton1.click();
            await expect(homePage.cartBadge).toHaveText('1');
            await expect(homePage.removeButtonItem1).toBeVisible();
        });
        await test.step('Add another item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton2.click();
            await expect(homePage.cartBadge).toHaveText('2');
            await expect(homePage.removeButtonItem2).toBeVisible();
         });
        await test.step('Add third item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton3.click();
            await expect(homePage.cartBadge).toHaveText('3');
            await expect(homePage.removeButtonItem3).toBeVisible();
        });
        await test.step('Add fourth item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton4.click();
            await expect(homePage.cartBadge).toHaveText('4');
            await expect(homePage.removeButtonItem4).toBeVisible();
        });
        await test.step('Add fifth item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton5.click();
            await expect(homePage.cartBadge).toHaveText('5');
            await expect(homePage.removeButtonItem5).toBeVisible();
        });
        await test.step('Add sixth item to cart and verify cart badge update', async () => {
            await homePage.addToCartButton6.click();
            await expect(homePage.cartBadge).toHaveText('6');
            await expect(homePage.removeButtonItem6).toBeVisible();
         });
         await test.step('Remove item from cart and verify cart badge update', async () => {
            await homePage.removeButtonItem1.click();
            await expect(homePage.cartBadge).toHaveText('5');
            await expect(homePage.removeButtonItem1).toBeHidden();
        });
        await test.step('Remove another item from cart and verify cart badge update', async () => {
            await homePage.removeButtonItem2.click();
            await expect(homePage.cartBadge).toHaveText('4');
            await expect(homePage.removeButtonItem2).toBeHidden();
         });
        await test.step('Remove third item from cart and verify cart badge update', async () => {
            await homePage.removeButtonItem3.click();
            await expect(homePage.cartBadge).toHaveText('3');
            await expect(homePage.removeButtonItem3).toBeHidden();
        });
        await test.step('Remove fourth item from cart and verify cart badge update', async () => {
            await homePage.removeButtonItem4.click();
            await expect(homePage.cartBadge).toHaveText('2');
            await expect(homePage.removeButtonItem4).toBeHidden();
        });
        await test.step('Remove fifth item from cart and verify cart badge update', async () => {
            await homePage.removeButtonItem5.click();
            await expect(homePage.cartBadge).toHaveText('1');
            await expect(homePage.removeButtonItem5).toBeHidden();
        });
        await test.step('Remove sixth item from cart and verify cart badge update', async () => {
            await homePage.removeButtonItem6.click();
            await expect(homePage.shoppingCartBadge).toBeVisible();
            await expect(homePage.removeButtonItem6).toBeHidden();
        });
    });
});