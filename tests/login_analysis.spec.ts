import test, { expect } from '../fixtures/basePages';

test('should successfully login with valid credentials', async ({ loginPage, homePage, page }) => {
	test.info().annotations.push({ type: 'Test', description: 'Happy path login for standard_user' });

	await test.step('Navigate to login page', async () => {
		await loginPage.goToLoginPage();
		await expect(page).toHaveURL(/.*saucedemo/);
	});

	await test.step('Enter valid credentials', async () => {
		await loginPage.enterValidEmail();
		await loginPage.enterValidPassword();
	});

	await test.step('Click login button', async () => {
		await loginPage.clickLoginButton();
	});

	await test.step('Verify successful login - products page visible', async () => {
		await expect(page).toHaveURL(/.*inventory/);
		await expect(homePage.title2).toBeVisible();
	});
});
