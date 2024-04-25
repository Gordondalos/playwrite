import {expect, Locator, test} from "@playwright/test";
import {AuthPage} from "./auth.page";
import {environment} from "../environment";


test.describe('test authorization', () => {
    const authPage = new AuthPage();

    test.beforeEach(async ({page}) => {

        await page.goto(environment.url);
    });

    test('test authorization true login and password', async ({page}) => {

        await authPage.login(page, 'wrong login');
        await authPage.checkErrorLogin(page);
        await authPage.login(page, environment.login)
        await expect(await page.locator('iiko-nav-menu h2')).toBeTruthy();

    });

})