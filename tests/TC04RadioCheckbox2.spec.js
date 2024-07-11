const { test, expect } = require('@playwright/test')
//contact Us 
//Radio button
test('radio button in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.locator('[value="green"]').check()
    await expect(page.locator('[value="green"]')).toBeChecked()
    await page.waitForTimeout(3000)
    await expect(page.locator('[value="yellow"]')).not.toBeChecked()
    await page.waitForTimeout(3000)
    await page.locator('[value="purple"]').check()
    await expect(page.locator('[value="purple"]')).toBeChecked()
})

//checkbox

test('checkbox button in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.locator('[value="option-1"]').check()
    await expect(page.locator('[value="option-1"]')).toBeChecked()
    await page.waitForTimeout(3000)
    await expect(page.locator('[value="option-2"]')).not.toBeChecked()
    await page.waitForTimeout(3000)
    await page.locator('[value="option-3"]').check()
    await expect(page.locator('[value="option-3"]')).toBeChecked()
})

test('Handling checkbox in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let checkbox2 = await page.locator('[value="option-2"]')
    checkbox2.click()
    await expect(checkbox2).toBeChecked()

})












