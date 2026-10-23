import { test, expect } from '@playwright/test';
import loginData from '../test-data/login.json';

test('Login with JSON data', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.username);
  await page.locator('[data-test="password"]').fill(loginData.password);
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory.html/);
});