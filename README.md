# Playwright with CodeceptJS

| | |
|-|-|
| <img src="https://playwright.dev/img/playwright-logo.svg" width="150" height="150">  |  <img src="https://codecept.io/logo.svg" style="width:100%" width="100" height="100"> |



**Playwright** is a Node.js library by Microsoft for automating web browsers, offering a high-level API for Chrome, Firefox, and Safari. It enables reliable end-to-end testing, browser automation, and user interaction.

**CodeceptJS** is an end-to-end testing framework that supports **Playwright**, **WebDriver**, **TestCafe**, and **Puppeteer**. It offers an easy-to-use API for testing web apps and supports various programming styles like BDD, TDD, and classical style.

**Playwright** and **CodeceptJS** make a strong combination for web automation. **CodeceptJS** has built-in plugins and utilities for testing web apps, including page objects, data-driven testing, and parallel execution. It supports running tests in multiple browsers and devices, making it ideal for cross-browser testing.

Overall, this demo project demonstrates the power and simplicity of using Playwright and CodeceptJS for automated testing by QA's members from Dwarves team.

<p><span style="color:yellow"><strong><em>P/s:</em> Bonus more the execution of Puppeteer, WebdriverIO, TestCafe test tools.</span></p>

# Project Structure

```
|-- root
    |-- .github (folder stores ci config file for github action)
        |-- workflows
            |-- main.yml
    |-- src
        |-- main (helper, test data, page, configuration)
            |-- helpers (the custom helpers of CodeceptJS)
                |-- utils_helper.js
            |-- pages
                |-- *.page.js
                |-- pages_import.js (page controller)
            |-- resources
                |-- test_data (data collection)
                |-- .env (environment variables)
                |-- configuration.js
        |-- test (scenarios)
            |-- *_test.js
    |-- .gitignore  
    |-- codecept.conf.js (Playwright helper config is by default)
    |-- codecept.puppeteer.conf.js (Puppeteer helper config)
    |-- codecept.testcafe.conf.js (Testcafe helper config)
    |-- codecept.webdriver.conf.js (WebdriverIO helper config)
    |-- jsconfig.json (using JS or TS)
    |-- package.json
    |-- README.md
    |-- steps_file.js (Codecept API injection)
    |-- steps.d.ts (compiler file)
    |-- yarn.lock
```

# Pattern

- [x] Folder and filename should be snack_case
- [x] Scenario should be Upper first
- [x] Variables,function should be camelCase

# Visual Studio Code Extension (recommend)

- [x] ESLint
- [x] Prettier - Code formatter
- [x] Jasmine ES5 Code Snippets
- [x] JavaScript (ES6) code snippets
- [x] Better Comments
- [x] Terminal
- [x] YAML

# Installation

Install all dependencies from **package.json**

# Running Tests

The default helper is Playwright.

## Playwright

Use `codecept.conf.js` to run tests with Playwright:

```
npx codeceptjs run --steps
```

## Puppeteer

Use `codecept.puppeteer.conf.js` to run tests with Puppeteer:

```
npx codeceptjs run --steps -c codecept.puppeteer.conf.js 
```


## WebdriverIO

Use `codecept.webdriver.conf.js` to run tests with WebdriverIO in Chrome:

```
npx codeceptjs run -c codecept.webdriver.conf.js --steps 
```

## TestCafe

Use `codecept.testcafe.conf.js` to run tests with TestCafe in Chrome:

```
npx codeceptjs run -c codecept.testcafe.conf.js --steps 
```

## Headless Mode

Run tests in headless mode:

```
HEADLESS=true npx codeceptjs run --steps
```

## Parallel Execution

Run tests in parallel with 3 workers:

```
npx codeceptjs run-workers 3
```

## Debugging Tests

Refer at [here](https://codecept.io/advanced/#tags)


## Naming conventions

| Locator               | Abbreviation | Example        |
| --------------------- | ------------ | -------------- |
| Text box, Input field | txt          | txtUsername    |
| Text area             | txa          | txaDescription |
| Button                | btn          | btnSubmit      |
| Label, Text           | lbl          | lblUserId      |
| Dropdown list         | ddl          | ddlProvince    |
| Image                 | img          | imgProfile     |
| Link                  | lnk          | lnkUserDetail  |
| Table                 | tbl          | tblUserList    |