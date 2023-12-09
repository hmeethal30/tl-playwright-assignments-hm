/* 
Assignment - 2 (Create a new Lead)

1) Open http://leaftaps.com/opentaps/control/main
2) Perform the following functions

    a) Login (Enter username, password, Click Login)
    b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
       await page.locator("text=CRM/SFA').click();
    c) Click the Leads Link (See the Tab)
    d) Click Create Lead Link (See Left Menu)
    e) Enter the company name, first name and last name (use id and pur your own data)
    f) Click Create Lead Button 

*/

import { chromium, test } from "@playwright/test";
test("Leaftap - Create a new lead", async() =>{

    //get a browser instance
    const browser = await chromium.launch({headless:false, channel:'chrome', args:['--start-maximized']});

    //set a browser context
    const browserContext1 = await browser.newContext();

    //get a new page
    const page1 = await browserContext1.newPage();

    //load the url
    await page1.goto("http://leaftaps.com/opentaps/control/main");
    await page1.waitForLoadState('load');

    //enter username and password
    await page1.fill('#username', 'Demosalesmanager');
    await page1.fill("#password", "crmsfa");

    //click login and wait for page to load
    await page1.click(".decorativeSubmit");
    await page1.waitForLoadState('load');

    //b) Click CRM/SFA Link
    await page1.click("text=CRM/SFA");

    // c) Click the Leads Link
    await page1.click("text=Leads");

    // d) Click Create Lead Link (See Left Menu)
    await page1.click("text=Create Lead");

    //Enter the company name, first name and last name 
    await page1.fill("#createLeadForm_companyName", "UST");
    await page1.fill("#createLeadForm_firstName", "Haseena");
    await page1.fill("#createLeadForm_lastName", 'Jubin');

    //f) Click Create Lead Button
    await page1.click("input[type=submit]");
    await page1.waitForLoadState("load")

    // Print url and title
    const pageUrl = page1.url();
    const pageTitle = await page1.title();

    console.log(`Current page url is : ${pageUrl}`);
    console.log(`Current page title is : ${pageTitle}`);

})