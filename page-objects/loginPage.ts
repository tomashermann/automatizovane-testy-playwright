import { Locator, Page } from '@playwright/test';

export class LoginPage {
    page: Page;
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    errorMessageInvalidCredentials: Locator;
    errorMessageEmptyCredentials: Locator;
    errorMessageLockedOutUser: Locator;
   
    
    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessageInvalidCredentials = page.getByText('Epic sadface: Username and password do not match any user in this service');
        this.errorMessageEmptyCredentials = page.getByText('Epic sadface: Username is required');
        this.errorMessageLockedOutUser = page.getByText('Epic sadface: Sorry, this user has been locked out.');
    
    }

    async goToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterInvalidEmail() {
        await this.emailInput.fill('invalid_email@gmai.com');
    }

    async enterInvalidPassword() {
        await this.passwordInput.fill('invalid_password');
    }

    async enterValidEmail() {
        await this.emailInput.fill('standard_user');
    }

    async enterValidPassword() {
        await this.passwordInput.fill('secret_sauce');
    }
    async enterLockedOutUserEmail() {
        await this.emailInput.fill('locked_out_user');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async loginWithValidCredentials() {
        await this.enterValidEmail();
        await this.enterValidPassword();
        await this.clickLoginButton();
    }
    async loginWithInvalidCredentials() {
        await this.enterInvalidEmail();
        await this.enterInvalidPassword();
        await this.clickLoginButton();
    }
    async loginWithEmptyCredentials() {
        await this.clickLoginButton();
    }
    async loginWithValidEmailAndInvalidPassword() {
        await this.enterValidEmail();
        await this.enterInvalidPassword();
        await this.clickLoginButton();
    }
    async loginWithInvalidEmailAndValidPassword() {
        await this.enterInvalidEmail();
        await this.enterValidPassword();
        await this.clickLoginButton();  
    }

    async loginWithLockedOutUser() {
        await this.enterLockedOutUserEmail();
        await this.enterValidPassword();
        await this.clickLoginButton();
    } 
}