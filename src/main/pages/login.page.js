const { I, testData } = inject();
const assert = require('assert')

const btnLoginWithGG = { css: 'button.ant-btn' }
const btnEmailAddress = { css: '[data-email="dfoundation.qa@gmail.com"]' }
const btnNextFromEmailForm = { css: '#identifierNext button[type="button"]' }
const btnNextFromPasswordForm = { css: '#passwordNext button[type="button"]' }
const txtEmail = { css: 'input#identifierId' }
const txtPassword = { css: 'input[name="password"]' }

class LoginPage {
    openFortressSite() {
        I.openUrl(testData.fortressUrl)
    }

    then_see() {
        I.seeTitleEquals('logo')
    }

    refresh() {
        I.refreshPage()
    }

    async setCookieAtContext() {
        const jwt = await I.getJWTTokenForLoginCredential();
        console.log(jwt);
        // await I.executeScript(() => document.cookie = "fortress-token=" + jwt + ";");
        await setCustomCookie(jwt);
        const ck = await I.grabCookie('fortress-token');
        console.log(ck);
    }

    async setCookie() {
        I.setPopupCookie(true);
        const ck = await I.grabCookie('fortress-token');
        console.log(ck);
    }

    async setCustomCookie(jwt) {
        const cookieName = 'fortress-token';
        const domain = testData.domain;
        const path = '/';
        await I.setCookie({
            name: cookieName,
            value: jwt,
            domain: domain,
            path: path,
        });
    }

    open() {
        I.amOnPage('/');
        const cookieName = 'fortress-token';
        const jwt = I.getJWTTokenForLoginCredential();
        const domain = testData.domain;
        const path = '/';
        I.setCookie({
            name: cookieName,
            value: jwt,
            domain: domain,
            path: path,
        });
        I.amOnPage('/');
    }
}

module.exports = new LoginPage()