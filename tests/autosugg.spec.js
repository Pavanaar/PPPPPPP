import {test} from "@playwright/test"
test ("handling autosuggestions",async({page})=>{
    //  test.slow
    await page.goto("https://www.amazon.com/")

    await page.locator('input#twotabsearchtextbox').fill('vivo')
    // await page.waitForLoadState('networkidle')
    // await page.waitForSelector('//div[@class="s-suggestion-container"]')
    // await page.pause(2000)
    let aa=await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
    console.log(aa);
    
    
})