import {expect, Locator, test} from "@playwright/test";
import {StockPage} from "../stock/stock.page";
import {environment} from "../environment";
import {AuthPage} from "../auth/auth.page";


test.describe('Test create document', () => {
    const authPage = new AuthPage();
    const stockPage = new StockPage();

    test.beforeEach( async ({page}) => {
        await page.goto(environment.url);
        await authPage.login(page, environment.login);
        await authPage.pWWaitFull(page);
        expect(page.locator('h2')).toBeTruthy();
    });


    test('go to documents and create new incoming invoice', async ({page}) => {

        await test.step('go to stock', async () => {
            await page.locator(stockPage.locators.linkToStock).click();
            await authPage.pWWaitFull(page);
        });

        await test.step('go to documents', async () => {
            await page.locator(stockPage.locators.linkToDocument).click();
        });

        await test.step('click button create document', async () => {
            await page.locator(stockPage.locators.buttonCreateDocument).click();
        })

        await test.step('create button incoming invoice', async () => {
            await page.locator(stockPage.locators.createInconmingInvoice).click();
            await authPage.pWWaitFull(page);
        });

        await test.step('create incoming invoice', async () => {
            await stockPage.createDocument(page)
            await authPage.pWWaitFull(page);
            await expect(page.locator('h1[data-ui-test-id="document-details-toolbar-document-number"]')).toBeVisible()
        })





    })





})