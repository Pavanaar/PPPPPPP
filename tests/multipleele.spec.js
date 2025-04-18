const {test,expect}=require('@playwright/test')
test(" ",async({page})=>{
    await page.goto("https://www.amazon.com/")
    await page.locator('#twotabsearchtextbox').fill("watches")
    await page.locator('#nav-search-submit-button').click()
    const m=await page.locator('.left-pane-results-container div div ').nth(1).textContent()
    await page.locator('.left-pane-results-container div div ').nth(1).click()
    console.log(m);

    // for (const key in m) {
    //    if(key==1){
    //     m[key].click()
    //    }
    // }
    // await page.pause(3000)


    //get text from multiplke elements
    const multitext=await page.locator('.left-pane-results-container div div ').allTextContents()
    //await page.pause(4000)
    console.log(multitext);

})