const { test, expect } = require('@playwright/test');

test('search product', async ({ page }) => {

    await page.goto('https://automationexercise.com/');
    await page.locator('[href="/products"]').click();
    await page.locator('#search_product').fill('Tshirt');
    await page.locator('#submit_search').click();


})