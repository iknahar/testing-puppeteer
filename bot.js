const puppeteer = require ("puppeteer");


const product_url = "https://flyo-drone.web.app/products/618be3016f112af512f090b4"

async function givePage(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    return page;
}


async function login(page){
    await page.goto(product_url);
    await page.waitForSelector("input[name='email']");
    await page.type("input[name='email']","nahar@kamrun.com");
    await page.type("input[name='password']","123456");
    await page.click("button[type='submit']", element => element.click());

}


async function addToCart(page){
    await page.waitForSelector("input[name='address']");
    await page.type("input[name='address']","Uttara, Dhaka");
    await page.type("input[name='contact']","123456");
    await page.click("input[type='submit']", element => element.click());

}


async function checkout(){
   var page = await givePage();
   await login(page);
   await addToCart(page);
}

checkout();