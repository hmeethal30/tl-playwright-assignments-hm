/* 
Assignment - 1 (Login to Salesforce)

1) Open Salesforce Login Page https://login.salesforce.com
2) Enter the username
3) Enter the password
4) Click Login
5) Print the title and url
*/

import { chromium, expect, test } from "@playwright/test";

//test to login to salesforce
test("To login to salesforce", async() => {
    //get a browser instance
    const browser = await chromium.launch({headless:false, channel:"chrome"});

    //set a browser context
    const browserContext1 = await browser.newContext();

    //get a new page
    const page1 = await browserContext1.newPage();

    // load the url
    await page1.goto("https://login.salesforce.com/");

    //Enter username and password
    await page1.fill('#username','haseenajubz@gmail.com');
    await page1.fill('#password','Test@123');

    //Click login and wait for page to load
    await page1.click('#Login');
    await page1.waitForLoadState('load');
 
    //Print url and page title
    console.log("Current page url is : ", page1.url());
    console.log("Current page title is : ", await page1.title());

})
