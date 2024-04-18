import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    await page.getByPlaceholder('What needs to be done?').click();
    await page.getByPlaceholder('What needs to be done?').fill('Убраться дома');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').click();
    await page.getByPlaceholder('What needs to be done?').fill('Сходить в магазин');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.locator('li')
        .filter({ hasText: 'Убраться дома' })
        .getByLabel('Toggle Todo').check();
});