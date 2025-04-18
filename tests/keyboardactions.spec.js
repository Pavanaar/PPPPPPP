import {test} from "@playwright/test"
test("keyborad actions",async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator("//input[@name='username']").click()
    // await page.keyboard.type("student")
    await page.keyboard.press('CapsLock+a')
    await page.keyboard.press("Control+a")
    await page.keyboard.down("Control")
    await page.keyboard.press("C")
    await page.keyboard.up('Control')
    await page.keyboard.press('Backspace')
    // await page.keyboard.type("dfgh")
    await page.keyboard.down("Control")
    await page.keyboard.press("V")
    await page.keyboard.up('Control')



    
   
    // await page.keyboard.press("b")
    // await page.keyboard.press("c")
    // await page.keyboard.down("Control")
    // await page.keyboard.press('C')
    // await page.keyboard.up('control')
    // await page.keyboard.down("Control")
    // await page.keyboard.press('V')
    // await page.keyboard.up('control')
    // await page.locator('//input[@name="password"]').click()
    // await page.keyboard.insertText("password")
    // await page.keyboard.press('Shift+a')
    // await page
  
   
    // await page.keyboard.down("Shift")
    // await page.keyboard.press("a")
    // await page.keyboard.press("b")
    // await page.keyboard.press("c")
    // await page.keyboard.up('Shift') 
})