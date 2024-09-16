const { test, expect } = require('@playwright/test');

test('register', async ({ page }) => {

    await page.goto('https://automationexercise.com/');
    await page.locator('[href="/login"]').click();
    await page.locator('[data-qa="login-email"]').fill('shubhamvkjain@gmail.com');
    await page.getByPlaceholder('Password').fill('mastershubham');
    await page.locator('[data-qa="login-button"]').click();

})
