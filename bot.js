const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  try {
    await page.goto("https://flyo-drone.web.app/login");
    await page.waitForSelector('input[name="email"]', {timeout, visible: true});

    await page.type('input[name="email"]', 'nahar@kamrun.com');
    await page.type('input[type="password"]', '123456');

    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation()
    ])

    const url = await page.url();
    if (url !== `https://flyo-drone.web.app/`) {
      throw new Error(`The URL was not https://flyo-drone.web.app/`);
    }
    console.log("Successfully logged in");
  } catch (err) {
    console.log(err);
  } finally {
    await browser.close();
  }
})();