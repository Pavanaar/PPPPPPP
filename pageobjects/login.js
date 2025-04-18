class login{
    constructor(page){
        this.page=page
        this.usn=page.locator("//input[@name='username']")
        this.pwd=page.locator('//input[@name="password"]')
        this.submitbutton=page.locator('//button[@id="submit"]')
    }
    async urll(){
        await this.page.goto("https://practicetestautomation.com/practice-test-login/")
    }
    async login(u,p){
        await this.usn.fill(u)
        await this.pwd.fill(p)
        await this.submitbutton.click()
    }
}
export default login