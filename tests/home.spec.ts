import test, { expect } from '../fixtures/basePages';

test.describe('Home page tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
        await loginPage.loginWithValidCredentials();
    });
});