import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}
  

  async open() {
    await this.page.goto('');
  }

  async login(email: string, password: string) {
    await this.page.locator('#email').fill(email);
    await this.page.locator('#password').fill(password);
    await this.page.locator('button[type="submit"]').click();
  }
}