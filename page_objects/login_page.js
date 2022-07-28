export class LoginPage{
    constructor(page){
        this.page = page;
        this.email_input = page.locator('input#email-field')
        this.password_input = page.locator('input#password-field')
        this.signin_button = page.locator('button#submit-btn')
        this.accept_cookies = page.locator('[aria-label="Cookie Policy"]').locator('text="Accept"')
    }

    async navigateTo(){
        await this.page.goto('/')
    }

    async login(email, password){
        await this.page.waitForLoadState('domcontentloaded')         
        await this.email_input.fill(email)
        await this.password_input.fill(password)  
        const [new_page] = await Promise.all([
            this.page.waitForEvent('load'),
            this.signin_button.click()            
        ]);
        return new_page        
    }
}