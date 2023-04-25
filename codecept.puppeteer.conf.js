require("ts-node/register");
require("dotenv").config({
  path: "./src/main/resources/.env",
});
const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
const isHeadless = process.env.HEADLESS === "true";

setHeadlessWhen(isHeadless);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./src/test/*_test.ts",
  output: "./reports",
  helpers: {
    Puppeteer: {
      url: "https://develop--fortress-v2.netlify.app",
      waitForTimeout: 5000,
      waitForNavigation: "networkidle0",
      waitForAction: 1000,
      show: true,
      browser: "chromium",
      chrome: {
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--enable-features=SameSiteByDefaultCookies",
        ],
      },
    }
  },
  include: {
    I: "./steps_file.ts",
    pages: "./src/main/pages/pages_import.ts",
    testData: "./src/main/resources/test_data/test_data.ts",
    configuration: "./src/main/resources/configuration.ts",
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
    },
    autoDelay: {
      enabled: true,
      methods: ["amOnPage", "waitForElement", "see"],
      delayBefore: 1000,
    },
    tryTo: {
      enabled: true,
      registerGlobal: true,
    },
    retryFailedStep: {
      enabled: false,
    },
    customLocator: {
      enabled: true,
      showActual: true,
      attribute: "data-menu-id",
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: "loginAs",
      users: {
        dfQA: {
          login: (I) => {
            I.amOnPage("/");
            I.setPopupCookie(true);
            I.amOnPage("/");
            I.waitInUrl('/dashboard', 10);
          },
          check: (I) => {
            I.seeInCurrentUrl('/dashboard');
          },
        },
      },
    },
  },
  name: "DF",
};
