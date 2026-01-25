import { test, expect } from '@playwright/test';

test('admin user can log in and see dashboard', async ({ page }) => {
  await page.goto('https://przemeknojman.github.io/automation-practice-labs/labs/professional-first-test'); 
  
  await page.locator('#email').fill('test@example.com');
  await page.locator('#password').fill('Password123!');
  await page.locator('button[type="submit"]').click();
 
  await expect(page.locator('h1')).toHaveText('Dashboard');
});

test('pupil user can log in and see dashboard', async ({ page }) => {
  await page.goto('https://przemeknojman.github.io/automation-practice-labs/labs/professional-first-test'); 
  
  await page.locator('#email').fill('pupil@example.com');
  await page.locator('#password').fill('Password321!');
  await page.locator('button[type="submit"]').click();
 
  await expect(page.locator('h1')).toHaveText('Dashboard');
});






















