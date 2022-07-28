// @ts-check
import { test, expect } from '@playwright/test';
import {LoginPage} from '../page_objects/login_page.js';
import {FirstPage} from '../page_objects/first_page.js';
import {get_screenshot} from '../helpers/helpers';

const user = require('../data/user')
const evidence_folder = 'evidences'
test('Validate login access', async ({ page, browserName, browser}) => {  
  const context = await browser.newContext({ recordVideo: { dir: evidence_folder } });
  const browser_info = `${browserName}-${browser.version()}`
  page = await context.newPage()

  const loginPage = await new LoginPage(page)
  const firstPage = await new FirstPage(page)

  await loginPage.navigateTo()  
  await loginPage.login(user.email, user.password)  
  await loginPage.accept_cookies.click()  

  await firstPage.page.waitForURL('/#/',{waitUntil:"load"})
  await firstPage.account_settings_button.waitFor({state:'attached', timeout:60000})
  
  await get_screenshot(page, evidence_folder,"login", browser_info)
  await firstPage.account_settings_button.click()
  
  await firstPage.verifyAccount(user.email)
  await get_screenshot(page, evidence_folder, "connected", browser_info)
  
  await firstPage.account_settings_button.click()
  await firstPage.page.waitForLoadState('networkidle');
  
  await expect(firstPage.library_tab).toBeVisible({timeout: 20000})
  await expect(firstPage.library_title).toBeVisible()

  await get_screenshot(page, evidence_folder, "library", browser_info)

  context.close()
});

