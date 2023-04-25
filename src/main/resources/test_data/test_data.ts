export default class TestData {
  fortressUrl: string;
  domain: string;
  passPhrase: string;
  aesEncryptionToken: string;

  constructor() {
    this.fortressUrl = `${process.env.SITE_URL}`;
    this.domain = ".develop--fortress-v2.netlify.app";
    this.passPhrase = `${process.env.PASS_PHRASE}`;
    this.aesEncryptionToken = `${process.env.AES_ENCRYPTION_TOKEN}`;
  }
}
