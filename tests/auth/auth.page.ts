import {Locator, Page} from "@playwright/test";
import {environment} from "../environment";

export class AuthPage {

    locators = {
        inputLogin: 'input[name="login"]',
        inputPassword: '#password',
        button: 'text=ВОЙТИ'
    }

    async login(page: Page, loginText: string): Promise<void> {

        const inputLogin: Locator =  page.locator(this.locators.inputLogin);
        const inputPassword: Locator =  page.locator(this.locators.inputPassword);
        const button: Locator = page.locator(this.locators.button);

        await inputLogin.fill(loginText);
        await inputPassword.fill(environment.password);
        await button.click();
    }

     async pWWaitFull(page: Page) {
        await page.waitForLoadState('load')
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
    }

    async checkErrorLogin(page: Page){
        const errorPopup = page.locator('.fuse-card');
        await errorPopup.waitFor();
        const errorMessage = await errorPopup.textContent();

        console.log('Сообщение об ошибке:', errorMessage);

        // if (errorMessage.includes("Пользователь с логином 'wrong login' не существует или удален Закрыть")) {
        //     const buttonClose = page.locator('text=Закрыть');
        //     await buttonClose.click();
        // } else {
        //     console.log('Не удалось найти сообщение об ошибке или ошибка отличается от ожидаемой.');
        // }

        await page.locator('iiko-error-dialog button').click()
    }
}