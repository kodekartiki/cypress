const { test, expect } = require('@playwright/test')

test('Handling radio button in playwright', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('#vfb-7-1')).toBeChecked()
    await expect(page.locator('#vfb-7-2')).not.toBeChecked()
    await page.locator('#vfb-7-3').check()
    await expect(page.locator('#vfb-7-3')).toBeChecked()
})

test('Handling checkbox inplaywright', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-7-1')).not.toBeChecked()
    let checkbox2 = await page.locator('#vfb-7-2')
    checkbox2.check()
    await expect(checkbox2).toBeChecked()
})

test('Handling checkbox in playwright', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    let checkbox2 = await page.locator('#vfb-6-1')
    checkbox2.click()
    await expect(checkbox2).toBeChecked()

})


