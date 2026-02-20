import { Locator, Page } from '@playwright/test';

export class LoginPage {
    page: Page;
    userInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    errorMessageInvalidCredentials: Locator;
    errorMessageEmptyCredentials: Locator;
    errorMessagePasswordRequired: Locator;
    errorMessageLockedOutUser: Locator;
    errorContainer: Locator;
    errorCointainerCrossButton: Locator;
    loginLogo: Locator;
   
    
    constructor(page: Page) {
        this.page = page;
        this.userInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessageInvalidCredentials = page.getByText('Epic sadface: Username and password do not match any user in this service');
        this.errorMessageEmptyCredentials = page.getByText('Epic sadface: Username is required');
        this.errorMessagePasswordRequired = page.getByText('Epic sadface: Password is required');
        this.errorMessageLockedOutUser = page.getByText('Epic sadface: Sorry, this user has been locked out.');
        this.errorContainer = page.locator('[data-test="error"]');
        this.errorCointainerCrossButton = page.locator('[data-test="error-button"]');
        this.loginLogo = page.getByTestId('login-button')
    
    }

    async goToLoginPage(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterInvalidUser(): Promise<void> {
        await this.userInput.fill('invalid_user@gmai.com');
    }

    async enterInvalidPassword(): Promise<void> {
        await this.passwordInput.fill('invalid_password');
    }

    async enterValidUser(): Promise<void> {
        await this.userInput.fill('standard_user');
    }

    async enterValidPassword(): Promise<void> {
        await this.passwordInput.fill('secret_sauce');
    }
    async enterLockedOutUser(): Promise<void> {
        await this.userInput.fill('locked_out_user');
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    async loginWithValidCredentials(): Promise<void> {
        await this.enterValidUser();
        await this.enterValidPassword();
        await this.clickLoginButton();
    }
    async loginWithInvalidCredentials(): Promise<void> {
        await this.enterInvalidUser();
        await this.enterInvalidPassword();
        await this.clickLoginButton();
    }
    async loginWithEmptyCredentials(): Promise<void> {
        await this.clickLoginButton();
    }
    async loginWithValidUserAndInvalidPassword(): Promise<void> {
        await this.enterValidUser();
        await this.enterInvalidPassword();
        await this.clickLoginButton();
    }
    async loginWithInvalidUserAndValidPassword(): Promise<void> {
        await this.enterInvalidUser();
        await this.enterValidPassword();
        await this.clickLoginButton();  
    }

    async loginWithLockedOutUser(): Promise<void> {
        await this.enterLockedOutUser();
        await this.enterValidPassword();
        await this.clickLoginButton();
    } 
} 