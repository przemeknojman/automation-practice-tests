import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { adminUser } from '../test-data/users';

test('admin user can log in and see dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.open();
  await loginPage.login(adminUser.email, adminUser.password);

  await dashboardPage.expectToBeVisible();
});