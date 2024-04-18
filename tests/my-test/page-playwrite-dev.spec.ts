import {expect, test} from "@playwright/test";

test.describe('navigation', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('https://playwright.dev/');
    });

    test('main navigation', async ({ page }) => {
        // Assertions use the expect API.
        await expect(page).toHaveURL('https://playwright.dev/');
    });

    test('has introduction', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await page.getByRole('link', { name: 'Get started' }).click();

        const locator = page.locator('h2#introduction');
        await expect(locator).toContainText('Introduction');
    })

    test('has title', async ({ page }) => {
        await page.goto('https://playwright.dev/');

        await expect(page).toHaveTitle(/Playwright/);
    });

    test('get started link', async ({ page }) => {
        await page.goto('https://playwright.dev/');

        // Click the get started link.
        await page.getByRole('link', { name: 'Get started' }).click();

        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

    test.afterEach(() => {
        console.log('Следующий тест');
    })

    test.afterAll(() => {
        console.log('тесты закончены');
    })

});