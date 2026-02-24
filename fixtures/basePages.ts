import { test as baseTest } from '@playwright/test';

import { LoginPage } from '../page-objects/loginPage';
import { HomePage } from '../page-objects/homePage';
import { SauceLabsBikeLightPage } from '../page-objects/sauceLabsBikeLightPage';
import { SauceLabsFleeceJacketPage } from '../page-objects/sauceLabsFleeceJacketPage';
import { SauceLabsBoltTshirtPage } from '../page-objects/sauceLabsBoltTshirtPage';  
import { SauceLabsBackpackPage } from '../page-objects/sauceLabsBackpackPage';
import { SauceLabsRedTshirtPage } from '../page-objects/sauceLabsRedTshirtPage';
import { SauceLabsOnesiePage } from '../page-objects/sauceLabsOnesiePage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    homePage: HomePage;
    sauceLabsBikeLightPage: SauceLabsBikeLightPage;
    sauceLabsFleeceJacketPage: SauceLabsFleeceJacketPage;
    sauceLabsBoltTshirtPage: SauceLabsBoltTshirtPage;
    sauceLabsBackpackPage: SauceLabsBackpackPage;    
    sauceLabsRedTshirtPage: SauceLabsRedTshirtPage;
    sauceLabsOnesiePage: SauceLabsOnesiePage;

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
   
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    sauceLabsBikeLightPage: async ({ page }, use) => {
        await use(new SauceLabsBikeLightPage(page));
    },
    sauceLabsFleeceJacketPage: async ({ page }, use) => {
        await use(new SauceLabsFleeceJacketPage(page));
    },
    sauceLabsBoltTshirtPage: async ({ page }, use) => {
        await use(new SauceLabsBoltTshirtPage(page));
    },
    sauceLabsBackpackPage: async ({ page }, use) => {
        await use(new SauceLabsBackpackPage(page));
    },
    sauceLabsRedTshirtPage: async ({ page }, use) => {
        await use(new SauceLabsRedTshirtPage(page));
    },
    sauceLabsOnesiePage: async ({ page }, use) => {
        await use(new SauceLabsOnesiePage(page));
    }
});

export default test;
export const { expect } = test;
