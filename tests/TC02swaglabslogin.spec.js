const { test, expect } = require('@playwright/test')

test('Verify the SwagLabs login functionality', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/v1/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[type="submit"]').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
    await expect(page).toHaveTitle('Swag Labs')
})