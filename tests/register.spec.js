
const { test, expect } = require('@playwright/test');

test('register', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    expect(page.locator('[alt="Website for automation practice"]')).toBeVisible();
    await page.locator('[href="/login"]').click();
    expect(page.getByText('New User Signup!')).toBeVisible();
    await page.getByPlaceholder('Name').fill('Shubham Jain');
    await page.locator('[data-qa="signup-email"]').fill('shubhamvkjain536@gmail.com');
    await page.locator('[data-qa="signup-button"]').click();
    expect(page.getByText('Enter Account Information')).toBeVisible();
    await page.locator('#id_gender1').check();
    await page.locator('[data-qa="password"]').fill('mastershubham');
    await page.locator('#days').selectOption('12');
    await page.locator('#months').selectOption('9');
    await page.locator('#years').selectOption('1996');
    await page.locator('#newsletter').check();
    await page.locator('#optin').check();
    await page.locator('#first_name').fill('shubham');
    await page.locator('#last_name').fill('jain');
    await page.locator('#company').fill('sensiaglobal');
    await page.locator('#address1').fill('pan card club road baner');
    await page.locator('#country').selectOption('India');
    await page.locator('#state').fill('Maharashtra');
    await page.locator('#city').fill('Nagpur');
    await page.locator('#zipcode').fill('440008');
    await page.locator('#mobile_number').fill('726152099');
    await page.locator('[data-qa="create-account"]').click({ timeout: 30000 });
    expect(page.getByText('Account Created!')).toBeVisible({ timeout: 30000 }); 
    await page.locator('[data-qa="continue-button"]').click();
});