import {expect, test} from '@playwright/test';

test('should projects page has a link tag', async ({ page }) => {
    await page.goto('/projects');
    expect(await page.$('a')).not.toBe(null);
});

