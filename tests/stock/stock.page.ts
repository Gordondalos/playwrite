import {Page} from "@playwright/test";

export class StockPage {

    locators = {
        linkToStock: 'a[href="/lite-stock/ru-RU/index.html"]',
        linkToDocument: 'a[href="/documents/ru-RU/index.html"]',
        buttonCreateDocument: 'button[data-ui-test-id="button-create-document"]',
        createInconmingInvoice: 'button[data-ui-test-id="button-create-incoming-invoice"]'
    }

    async createDocument(page: Page): Promise<void>{
        await page.click('.supplier-selector__input mat-select');
        await page.waitForSelector('.mat-select-panel');
        // await page.locator('.mat-option:first-child .mat-option-text').click();
        await page.getByRole('option', { name: '123', exact: true }).click();
        // await page.locator('#mat-option-0').click();

        await page.click('.base-info-form-field__input mat-select');
        await page.waitForSelector('.mat-select-panel');
        await page.locator('#mat-option-0').click();
        await page.locator('button[data-ui-test-id="button-save-document"]').click();
    }
}