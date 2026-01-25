import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async expectToBeVisible() {
    await expect(
      this.page.locator('h1')
    ).toHaveText('Dashboard');
  }
}