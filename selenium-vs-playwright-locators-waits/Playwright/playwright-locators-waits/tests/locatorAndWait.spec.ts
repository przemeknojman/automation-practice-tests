import { test, expect } from '@playwright/test';

test.describe("Desct", ()=>  {
  test.beforeEach(async ({page}) => {
    await page.goto('/automation-practice-labs/labs/selenium-vs-playwright-locators-waits/');
  });

  test("Basic Locators", async ({page}) => {
    await page.getByLabel('Username').fill('testuser');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();
  });

  test("Dynamic Waiting", async ({page}) => {
    await page.click('#save');
  });

  test("Handling Shadow DOM", async ({page}) => {
    await page.locator('custom-login >> #username').fill('testuser');
    await page.locator('custom-login >> #login').click();
  });

  test("Handling iFrames", async ({page}) => {
    const frame = page.frameLocator('#login-frame');
    await frame.locator('#username').fill('testuser');
    await frame.locator('#login').click();
  });

  test("Handling Multiple Matching Elements", async ({page}) => {
  //   await page.locator("//span[text()='John Smith']/following-sibling::button").click();
  const user = page.locator('.user').filter({ hasText: 'John Smith' });
  await user.nth(1).getByRole('button', { name: 'Delete' }).click();
   });

   test("Stale Element Handling", async ({page}) => {
      const button = page.locator('#deleteBtn');
      await button.click();
      await button.click();
   });
});


