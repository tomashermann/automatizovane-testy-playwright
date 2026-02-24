import test, { expect } from '../fixtures/basePages';

test.describe('Logout tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
        await loginPage.loginWithValidCredentials();
    });
 test.afterEach(async ({ context }) => {
         await context.close();
        });
    
    test('Verify user can log out successfully @Regression,@Smoke', async ({ page, homePage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that a user can log out successfully and is redirected to the login page' 
        });
        await test.step('Log out from the application', async () => {
            await homePage.clickOnMenuButton();
            await homePage.clickOnLogoutButton();
        });
        await test.step('Verify successful logout', async () => {
            await expect(page).toHaveURL('https://www.saucedemo.com/');
        });
    });
});