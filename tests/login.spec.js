const { test, expect } = require('@playwright/test');

test('register', async ({ page }) => {

    await page.goto('https://automationexercise.com/');
    expect (page)
    await page.locator('[href="/login"]').click();
    await page.locator('[data-qa="login-email"]').fill('shubhamvkjain1@gmail.com');
    await page.getByPlaceholder('Password').fill('mastershubham');
    await page.locator('[data-qa="login-button"]').click();
    await page.locator('[href="/delete_account"]').click();
    expect(page.getByText('Account Deleted!')).toBeVisible();

})
