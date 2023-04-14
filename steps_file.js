// in this file you can append custom step methods to 'I' object
const cryptoJS = require('crypto-js')
const { I, pages, testData } = inject()

module.exports = function() {
  return actor({
    async openUrl(url) {
      await this.amOnPage(url);
      // await this.setPopupCookie(true);
      // await this.refreshPage();
    },

    async setPopupCookie(setting) {
      if (setting) {
          const cookieName = 'fortress-token';
          const jwt = await this.getJWTTokenForLoginCredential();
          const domain = testData.domain;
          const path = '/';
          await this.setCookie({
              name: cookieName,
              value: jwt,
              domain: domain,
              path: path,
          });
      }
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
