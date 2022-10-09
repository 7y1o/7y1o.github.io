import {expect, test} from '@playwright/test';

test('should homepage has heading', async ({ page }) => {
    await page.goto('/');
    expect(await page.textContent('h1')).toBe('7y1o');
});

test('should homepage has subtitle text', async ({ page }) => {
    await page.goto('/');
    expect(await page.textContent('p')).toBe('This site is under construction')
});

test('should homepage has three js canvas', async ({page}) => {
    await page.goto('/');
    const canvas = await page.$('canvas');

    expect(canvas).not.toBe(null);
    expect(
        (await canvas?.getAttribute('data-engine'))
            ?.includes('three.js')
    ).toBe(true);
})
