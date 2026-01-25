import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { open: 'never' }]],

  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        baseURL:
          'https://przemeknojman.github.io/automation-practice-labs/labs/professional-first-test/',
        headless: false,
      },
    },
  ],
});