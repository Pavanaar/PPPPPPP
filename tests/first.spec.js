import {test,expect} from "@playwright/test"

test("launch the url",async({page})=>{

await page.goto("https://practicetestautomation.com/practice-test-login/")
// await page.locator("//input[@name='username']").fill("student")
await page.fill("//input[@name='username']","student")
await page.locator('//input[@name="password"]').fill("Password123")
// await page.locator('//button[@id="submit"]').click()


//expect usage
await expect(page).toHaveURL("https://racticetestautomation.com/practice-test-login/")

await expect(page).toHaveTitle("Test Login | Practice Test Automation")
let uuu=await page.url()
await expect(uuu).toContain("login")
let tt=await page.title()
await expect(tt).toBe('Test Login | Practice Test Automation')

await expect(page.locator('//input[@name="password"]')).toBeVisible();

await expect(page.locator('//button[@id="submit"]')).toHaveText('Submit');
// expect().
})
test.only("",async({browser})=>{
    let context=await browser.newContext()
    let page =await context.newPage()
    await page.goto('https://racticetestautomation.com/practice-test-login/') 
})

