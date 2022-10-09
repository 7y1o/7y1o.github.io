import {expect, test} from '@playwright/test';

test('should skills page has a link tag', async ({ page }) => {
    await page.goto('/skills');
    expect(await page.$('a')).not.toBe(null);
});
