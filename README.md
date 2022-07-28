# VitalSource POC with Playwright

I chosed to use the Playwright framework instead of Cypress, due to the fact that we are dealing with some CORS request and to not lose too much time investigating why the Cypress is not working properly.

I believe that we are facing some JS errors with a RUM service, as per Cypress output.

Considering this, I'm using playwright with JS, because is fast and easy to configure and create the test case scenarios, and mitigate this gap that we have with Cypress.io.

-----
## Task Scenario: 
### Validate that authentication is successful and the test user is redirected to the library page

Please create a Cypress test for the login workflow for Bookshelf Online at <https://bookshelf.vitalsource.com>, validating that authentication is successful and the test user is redirected to the library dashboard. Provide some type of documentation (video, screenshots or otherwise).
 
In order to do this, you'll need to manually create an account first. If your library is empty and you'd like to explore our e-text reading platform, redeem this sample code: G7NGW6KP8C7J3SBV2J3K

-----

### Requirements

* Nodejs ^15.4.0
* Playwright (installed with npm install command)
* Create an account at https://bookshelf.vitalsource.com/
-----

### Project structure

* The "data" folder contains the file with Account information for login purposes, and if necessary we can create more files to be used as a Data Source.

* The page_objects folder contains the scripts that map the elements and take some actions on these pages.
  * Login Page as the name says is the login page where we gonna populate with the Loggin Account.
  * First Page is the first page after login.

* The tests folder contains the script with the test case, I do recommend to create a script per functionalities context, or page context.

* Once that the test is started the folder "evidences" will be created and the Screenshots and Videos shall be saved there.

* The "helpers" folder contains scripts with commom functions that will help in general.

-----

### Configure project

* To configure the project run the following command:
```sh
npm install
```

* Define the login access with the account of Bookshelf just created.
  * Set the email and password in the file **_data/user.js_**

* To configure which browser to run, modify the property _config.projects_ at file **_playwright.config.js_**.

-----

### Run tests

To run the test cases you can use the following commands:
```sh
npm test
```

To run tests in parallel you can use the following command:
(We must to take care when running in parallel using the same user, I didn't went further to solve it on this POC)
```sh
npx playwright test
```
------

### Show tests report

To show the test cases result Report you can use the following commands:

```sh
npm run report
```
or
```sh
npx playwright show-report
```
-----

### Debug tests

To run test cases in Debug mode you can use the following commands:

```sh
npm run debug
```
or
```sh
npx playwright test --debug
```
-----
