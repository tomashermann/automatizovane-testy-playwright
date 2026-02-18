import test, { expect } from '../fixtures/basePages';

test.describe('Login tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
    });

    test('login with valid credentials @Regression,@Smoke,@Sanity', async ({ page, loginPage, homePage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that a user can log in with valid credentials and is redirected to the inventory page' 
        });
            await test.step('Login with valid credentials', async () => {
                await loginPage.loginWithValidCredentials();
            });
            await test.step('Verify successful login', async () => {
                await expect(homePage.item1).toBeVisible();
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            });
        });

    test('login with empty credentials @Regression,@Smoke,@Sanity', async ({ page, loginPage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that an error message is displayed when trying to log in with empty credentials' 
        });
            await test.step('Login with empty credentials', async () => {
                await loginPage.loginWithEmptyCredentials();
            });
            await test.step('Verify error message for empty credentials', async () => {
                await expect(loginPage.errorMessageEmptyCredentials).toBeVisible();
                });
        });

    test('login with locked out user @Regression,@Smoke', async ({ page, loginPage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that an error message is displayed when trying to log in with a locked out user' 
        });
            await test.step('Login with locked out user', async () => {
                await loginPage.loginWithLockedOutUser();
            });
            await test.step('Verify error message for locked out user', async () => {
                await expect(loginPage.errorMessageLockedOutUser).toBeVisible();
            });
        });

    test('login with invalid email @Regression,@Smoke', async ({ page, loginPage }) => {
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that an error message is displayed when trying to log in with an invalid email' 
        });
            await test.step('Login with invalid email', async () => {
                await loginPage.loginWithInvalidEmailAndValidPassword();
            });
            await test.step('Verify error message for invalid email', async () => {
                await expect(loginPage.errorMessageInvalidCredentials).toBeVisible();
            });
        });
        
    test('login with invalid password @Regression,@Smoke', async ({ page, loginPage }) => { 
        test.info().annotations.push({ 
            type: 'Test', 
            description: 'this test verifies that an error message is displayed when trying to log in with an invalid password' 
        });
            await test.step('Login with invalid password', async () => {
                await loginPage.loginWithValidEmailAndInvalidPassword();
            });
            await test.step('Verify error message for invalid password', async () => {  
                await expect(loginPage.errorMessageInvalidCredentials).toBeVisible();
            });
        });
        test('login with invalid email and password @Regression', async ({ page, loginPage }) => {
            test.info().annotations.push({ 
                type: 'Test', 
                description: 'this test verifies that an error message is displayed when trying to log in with an invalid email and password' 
            });
                await test.step('Login with invalid email and password', async () => {
                    await loginPage.loginWithInvalidCredentials();
                });
                await test.step('Verify error message for invalid email and password', async () => {
                    await expect(loginPage.errorMessageInvalidCredentials).toBeVisible();
                });
            });
    });