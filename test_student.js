const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  try {
    await page.goto('http://127.0.0.1:5173');
    await page.waitForSelector('.role-chip', {timeout: 2000});
    const studentChip = (await page.$$('.role-chip'))[0];
    await studentChip.click();
    await page.type('input[name="name"]', 'Test');
    await page.type('input[name="username"]', 'test');
    await page.type('input[name="password"]', 'test');
    await page.click('button[data-testid="login-submit"]');
    await page.waitForTimeout(2000);
  } catch(e) {
    console.error("Test script error:", e);
  }
  await browser.close();
})();
