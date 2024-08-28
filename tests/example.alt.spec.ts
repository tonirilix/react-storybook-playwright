import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    page.setViewportSize({
         width: 600,
         height: 1000
    })
    await page.goto('http://localhost:6006/iframe.html?onboarding=false&args=&id=example-page--logged-in&viewMode=story');

    await expect(page.getByText('Welcome, Jane Doe!')).toBeVisible();
    await expect(page).toHaveScreenshot({fullPage: true})
});


