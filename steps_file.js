// in this file you can append custom step methods to 'I' object
const cryptoJS = require('crypto-js')
const { I, pages, testData } = inject()

module.exports = function() {
  return actor({
    setPopupCookie(setting) {
      if (setting) {
          const cookieName = 'fortress-token';
          const jwt = this.getJWTTokenForLoginCredential();
          const domain = testData.domain;
          const path = '/';
          this.setCookie({
              name: cookieName,
              value: jwt,
              domain: domain,
              path: path,
          });
      }
    },

    /**
     * Checks that a given Element is visible Element is located by CSS or XPath and click
     * * `Note` can force click by `I.seeAndClickElement(locator, value, true) or I.seeAndClickElement(locator, null, true)`
     * ```js
     * // simple css
     * I.seeAndClickElement({css: '#login'})
     * // simple xpath
     * I.seeAndClickElement({xpath: '//*[@id="login"]'})
     * // simple locator and value
     * I.seeAndClickElement({css: '#login'}, 'Login')
     * ```
     * @param {CodeceptJS.LocatorOrString} locator located by CSS|XPath|strict locator.
     * @param {string} value — (optional, null by default) value of element.
     * @param {boolean} forceClick - (optional, false by default)
     */
    seeAndClickElement(locator, value = null, forceClick = false) {
      this.seeElement(locator)
      switch (forceClick) {
          case true:
              if (typeof value === 'string') {
                  this.forceClick(value, locator);
              } else {
                  this.forceClick(locator);
              }
              break

          default:
              if (typeof value === 'string') {
                  this.click(value, locator);
              } else {
                  this.click(locator);
              }
              break
      }
    },

    /**
     * Clears a <textarea> or text <input> element's value and fill value
     * ```js
     * // simple css
     * I.clearAndFillField({css: '#txtFirstname'}, 'Simple')
     * // simple xpath
     * I.clearAndFillField({xpath: '//*[@id="txtFirstname"]'}, 'Simple')
     * ```
     * @param locator located by CSS|XPath|strict locator.
     */
    clearAndFillField(locator, value) {
        this.clearField(locator);
        this.fillField(locator, value);
    },

    /**
     * Retrieves a text from an element located by CSS or XPath and returns it to test.
     * ```js
     * // simple css
     * const productName = await I.seeAndGrabTextFrom({css: '#productName'})
     * // simple xpath
     * const productName = await I.seeAndGrabTextFrom({xpath: '//*[@id="productName"]'})
     * ```
     * @param locator element located by CSS|XPath|strict locator.
     * @returns attribute value (If multiple elements found returns an array of texts.)
     */
    async seeAndGrabTextFrom(locator) {
      this.seeElement(locator);
      const text = await this.grabTextFrom(locator);
      return text;
    },

    getJWTTokenForLoginCredential() {
      return this.decryptWithAES(testData.aesEncryptionToken, testData.passPhrase);
    },

    encryptWithAES(text, passPhrase) {
      return cryptoJS.AES.encrypt(text, passPhrase).toString();
    },

    decryptWithAES(cipherText, passPhrase) {
      const bytes = cryptoJS.AES.decrypt(cipherText, passPhrase);
      const originalText = bytes.toString(cryptoJS.enc.Utf8);
      return originalText;
    }

  });
}
