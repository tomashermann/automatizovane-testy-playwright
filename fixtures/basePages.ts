import { test as baseTest } from '@playwright/test';

import { LoginPage } from '../page-objects/loginPage';
import { HomePage } from '../page-objects/homePage';
import { SauceLabsPage } from '../page-objects/sauceLabsPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    homePage: HomePage;
    sauceLabsPage: SauceLabsPage;
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    sauceLabsPage: async ({ page }, use) => {
        await use(new SauceLabsPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
});

export default test;
export const { expect } = test;
