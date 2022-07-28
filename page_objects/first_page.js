import { expect } from "@playwright/test";

export class FirstPage{
    constructor(page){
        this.page = page;
        this.account_settings_button = page.locator('[aria-label="Account Settings"]')
        this.account_settings_menu = page.locator('[id^="popover"]')
        this.library_tab = page.locator('.react-tabs', {hasText: "Library"})  
        this.library_title = page.locator('h1', {hasText: "Library"})
    }

    async navigateTo(){
        await this.page.goto('/')
    }

    async verifyAccount(email){
        let email_logged = await this.account_settings_menu.locator(`text="${email}"`).innerText()
        await expect(email_logged).toBe(email)  
    }
}

