import {test,expect} from "@playwright/test"
test("child tap",async({browser})=>{
   let context= await browser.newContext()
   let page=await context.newPage()
   await page.goto("https://www.amazon.in/s?bbn=1388921031&rh=n%3A1388921031%2Cp_89%3AboAt&_encoding=UTF8&content-id=amzn1.sym.82b20790-8877-4d70-8f73-9d8246e460aa&pd_rd_r=5a8ec472-4af6-4e0e-9cef-a789da44d17f&pd_rd_w=aeLJO&pd_rd_wg=pVO90&pf_rd_p=82b20790-8877-4d70-8f73-9d8246e460aa&pf_rd_r=95CMN0WMCEZ717EA14FK&ref=pd_hp_d_atf_unk")
   let u=await page.url()
   let product=await page.locator('//div[@class="a-section aok-relative s-image-square-aspect"]/img[@alt="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"]')
   const [newPage]=await Promise.all([
    context.waitForEvent('page'),product.click()])
    
    let url=await newPage.url()
    await expect(newPage).not.toHaveURL(u)
    // console.log(url);
    

})