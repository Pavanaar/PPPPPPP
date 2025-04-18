import {test} from "@playwright/test"
test("",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    // await page.screenshot({path:'screenshots/aa.png'})
    await page.screenshot({path:'screenshots/ss.png'})


    // //if multiple screenshots
    const time = new Date().getTime();
    await page.screenshot({ path: `screenshots/page-${time}.png` });
    
})