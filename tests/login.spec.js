import {test,expect} from "@playwright/test"
import login from "../pageobjects/login.js"


test("launch the url",async({page})=>{
let Login=new login(page) 
await Login.urll()
// await page.goto("https://practicetestautomation.com/practice-test-login/")

await Login.login("student","password")
// await page.locator("//input[@name='username']").fill("student")
// await page.locator('//input[@name="password"]').fill("Password123")
// await page.locator('//button[@id="submit"]').click()



})