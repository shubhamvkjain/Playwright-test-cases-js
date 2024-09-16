const { test, expect } = require('@playwright/test');

test('search product', async ({ page }) => {

    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Cart' }).click();
    await page.locator('#susbscribe_email').fill('shubhamvkjain@gmail.com');
    await expect(page.getByText('Subscription')).toBeVisible();
    await page.locator('#subscribe').click();
    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();

})