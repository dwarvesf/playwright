require('dotenv').config({
  path: './src/main/resources/.env'
})
const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
const isHeadless = process.env.HEADLESS === 'true'

setHeadlessWhen(isHeadless);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './src/test/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://develop--fortress-v2.netlify.app',
      show: true,
      browser: 'chromium',
      waitForAction: 1000,
      waitForTimeout: 5000,
      chrome: {
        args: [
          '--no-sandbox', 
          '--disable-setuid-sandbox',
          '--enable-features=SameSiteByDefaultCookies'
        ],
      },
    },
    BaseHelper: {
      require: './src/main/helpers/base_helper.js',
    },
    Utils: {
      require: './src/main/helpers/utils_helper.js',
    }
  },
  include: {
    I: './steps_file.js',
    pages: './src/main/pages/pages_import.js',
    testData: './src/main/resources/test_data/test_data.js',
    configuration: './src/main/resources/configuration.js',
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
    autoDelay: {
      enabled: true,
      methods: ['amOnPage', 'waitForElement', 'see'],
      delayBefore: 1000,
    },
    tryTo: {
      enabled: true,
      registerGlobal: true,
    },
    retryFailedStep: {
      enabled: false,
    },
  },
  name: 'DF'
}