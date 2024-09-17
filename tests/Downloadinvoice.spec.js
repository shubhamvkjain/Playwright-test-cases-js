const { test, expect } = require('@playwright/test');

test('register', async ({ page }) => {

    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Products' }).click();
    await page.locator('[data-product-id="1"]').first().click();
    await page.locator('[data-dismiss="modal"]').click();
    await page.locator('[data-product-id="2"]').first().click();
    await page.locator('[data-dismiss="modal"]').click();
    await page.locator('[href="/login"]').click();
    await page.locator('[data-qa="login-email"]').fill('shubhamvkjain53@gmail.com');
    await page.getByPlaceholder('Password').fill('mastershubham');
    await page.locator('[data-qa="login-button"]').click();
    await page.getByRole('link', { name: ' Cart' }).click();
    await page.getByText('Proceed To Checkout').click();
    await page.getByText('Place Order').click();
    await page.locator('[data-qa="name-on-card"]').fill('Shubham');
    await page.locator('[data-qa="name-on-card"]').fill('Shubham');
    await page.locator('[data-qa="card-number"]').fill('123456789122');
    await page.locator('[data-qa="cvc"]').fill('123');
    await page.getByPlaceholder('MM').fill('12');
    await page.getByPlaceholder('YYYY').fill('1996');
    await page.locator('[data-qa="pay-button"]').click();
    await page.getByText('Place Order').click();
    await page.getByRole('link', { name: 'Download Invoice' }).click();
    const download = await downloadPromise;
    
})