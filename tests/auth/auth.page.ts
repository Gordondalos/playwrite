import {Locator} from "@playwright/test";
import {environment} from "../environment";

export class AuthPage {

    locators = {
        inputLogin: 'input[name="login"]',
        inputPassword: '#password',
        button: 'text=ВОЙТИ'
    }

    async login(inputLogin: Locator, inputPassword: Locator, button: Locator, loginText: string) {
        await inputLogin.fill(loginText);
        await inputPassword.fill(environment.password);
        await button.click();
    }
}