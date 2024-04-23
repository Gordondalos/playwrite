import {expect, test} from "@playwright/test";
import {AuthPage} from "./auth.page";
import {environment} from "../environment";


test.describe('test authorization', () => {
    const authPage = new AuthPage();

    test.beforeEach(async ({ page }) => {

        await page.goto(environment.url);
    });

    test('test authorization true login and password', async ({ page }) => {

        const inputLogin =  page.locator(authPage.locators.inputLogin);
        const inputPassword =  page.locator(authPage.locators.inputPassword);
        const button = page.locator(authPage.locators.button);


        await authPage.login(inputLogin, inputPassword, button, 'wrong login')

        const errorPopup = page.locator('.fuse-card');
        await errorPopup.waitFor();


        const errorMessage = await errorPopup.textContent();


        console.log('Сообщение об ошибке:', errorMessage);

        if (errorMessage.includes("Пользователь с логином 'wrong login' не существует или удален Закрыть")) {
            const buttonClose = page.locator('text=Закрыть');
            await buttonClose.click();
        } else {
            console.log('Не удалось найти сообщение об ошибке или ошибка отличается от ожидаемой.');
        }


        await authPage.login(inputLogin, inputPassword, button, environment.login)

        await expect(page.locator('text=Ежедневные операции в ресторане')).toBeVisible();


    });

})