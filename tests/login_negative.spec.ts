import test, { expect } from '../fixtures/basePages';

test.describe('Login - Negative Tests', () => {
    test.beforeEach(async ({ loginPage, page }) => {
        await loginPage.goToLoginPage();
    });
     test.afterEach(async ({ context }) => {
         await context.close();
    });

  test('should show error for locked_out_user', async ({ loginPage, page }) => {
    test.info().annotations.push({ type: 'Test', description: 'Negative - locked_out_user blocked' });

    await test.step('Navigate to login page', async () => {
      await expect(page).toHaveURL(/.*saucedemo/);
    });

    await test.step('Attempt login with locked_out_user', async () => {
      await loginPage.loginWithLockedOutUser();
    });

    await test.step('Verify locked out error is displayed', async () => {
      await expect(loginPage.errorContainer).toBeVisible();
      await expect(loginPage.errorContainer).toContainText('Sorry, this user has been locked out.');
    });
  });

  test('should show error for invalid password', async ({ loginPage, page }) => {
    test.info().annotations.push({ type: 'Test', description: 'Negative - invalid password' });

    await test.step('Navigate to login page', async () => {
      await expect(page).toHaveURL(/.*saucedemo/);
    });

    await test.step('Attempt login with valid username and invalid password', async () => {
      await loginPage.loginWithValidUserAndInvalidPassword();
    });

    await test.step('Verify invalid credentials error is displayed', async () => {
      await expect(loginPage.errorContainer).toBeVisible();
      await expect(loginPage.errorContainer).toContainText('Username and password do not match any user in this service');
    });
  });

  test('should show error for invalid credentials', async ({ loginPage, page }) => {
    test.info().annotations.push({ type: 'Test', description: 'Negative - invalid username and password' });

    await test.step('Navigate to login page', async () => {
      await expect(page).toHaveURL(/.*saucedemo/);
    });

    await test.step('Attempt login with invalid username and password', async () => {
      await loginPage.loginWithInvalidCredentials();
    });

    await test.step('Verify invalid credentials error is displayed', async () => {
      await expect(loginPage.errorContainer).toBeVisible();
      await expect(loginPage.errorContainer).toContainText('Username and password do not match any user in this service');
    });
  });

  test('should show error when credentials are empty', async ({ loginPage, page }) => {
    test.info().annotations.push({ type: 'Test', description: 'Negative - empty credentials' });

    await test.step('Navigate to login page', async () => {
      await expect(page).toHaveURL(/.*saucedemo/);
    });

    await test.step('Attempt login without entering credentials', async () => {
      await loginPage.loginWithEmptyCredentials();
    });

    await test.step('Verify username required error is displayed', async () => {
      await expect(loginPage.errorContainer).toBeVisible();
      await expect(loginPage.errorMessageEmptyCredentials).toBeVisible();
    });
  });

  test('should show error when password is missing', async ({ loginPage, page }) => {
    test.info().annotations.push({ type: 'Test', description: 'Negative - missing password' });

    await test.step('Navigate to login page', async () => {
      await expect(page).toHaveURL(/.*saucedemo/);
    });

    await test.step('Enter username only and submit', async () => {
      await loginPage.enterValidUser();
      await loginPage.clickLoginButton();
    });

    await test.step('Verify password required error is displayed', async () => {
      await expect(loginPage.errorContainer).toBeVisible();
      await expect(loginPage.errorMessagePasswordRequired).toBeVisible();
    });
  });

  test('should show error when username is missing', async ({ loginPage, page }) => {
    test.info().annotations.push({ type: 'Test', description: 'Negative - missing username' });

    await test.step('Navigate to login page', async () => {
      await expect(page).toHaveURL(/.*saucedemo/);
    });

    await test.step('Enter password only and submit', async () => {
      await loginPage.enterValidPassword();
      await loginPage.clickLoginButton();
    });

    await test.step('Verify username required error is displayed', async () => {
      await expect(loginPage.errorContainer).toBeVisible();
      await expect(loginPage.errorMessageEmptyCredentials).toBeVisible();
    });
  });
});
