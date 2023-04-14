const { pages } = inject()
Feature('@first Login Fortress @smoke @initialize')

Scenario('Login', async () => {
    // pages.loginPage.openFortressSite();
    // pages.loginPage.setCookieAtContext();
    // pages.loginPage.openFortressSite();


    // pause();
    pages.loginPage.open()
    pause();
});