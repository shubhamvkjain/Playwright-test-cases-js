const { test, expect } = require('@playwright/test');


test('login', async ({ page }) => {

  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('[data-product-id="1"]').first().click();
  await page.locator('[data-dismiss="modal"]').click();
  await page.locator('[data-product-id="2"]').first().click();
  await page.locator('[data-dismiss="modal"]').click();
  await page.goto('https://automationexercise.com/view_cart');
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Register / Login' }).click();
});