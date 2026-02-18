import test, { expect } from '../fixtures/basePages';

test.describe('Home tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();

    });
    
    test('verify that the inventory page is displayed after successful login @Regression,@Smoke,@Sanity', async ({ page, loginPage, homePage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that a user can log in with valid credentials and is redirected to the inventory page' 
        });
            await test.step('Login with valid credentials', async () => {
                await loginPage.loginWithValidCredentials();
        });
    });
}); 