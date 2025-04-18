import {test} from "@playwright/test"
test.only ("iframe",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0")
    let frame=await page.frameLocator('//iframe[@class="w-full h-96"]')
    await frame.locator('#username').fill("dsfghjk")
})
test("nested",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1")
    let frame1= page.frameLocator('//iframe[@class="w-full h-96"]')
    let gmail=await frame1.locator("//p[.='Admin@gmail.com']").textContent()
    await console.log(gmail);
    let frame2= await frame1.frameLocator('//div[@class="form_container"]/iframe')
    await frame2.locator('//input[@name="email"]').fill(gmail)
    
})
test("",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/frames/multiple?sublist=2')
    
})