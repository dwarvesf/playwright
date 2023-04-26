import Locator = CodeceptJS.Locator;
import BasePage from './BasePage';
const { I } = inject()

export default class DashboardPage extends BasePage {
    I: CodeceptJS.I;

    constructor(I: CodeceptJS.I) {
        super('/dashboard');
        this.I = I;
    }

    // Locator definition
    private lblDashboardHeader: Locator = locate({ css: '.ant-typography' }).as('Dashboard Header label');
    private btnProjectMenu: Locator = locate('.ant-menu-title-content > [href $= "projects"]').as('Project menu button');

    // Method definition
    waitForOpened(): DashboardPage {
        super.waitForOpened();
        return this;
    }

    then_canSeeDashboardHeaderDisplays() {
        I.see('Dashboard', this.lblDashboardHeader);
    }

    and_clickOnProjectsMenu() {
        I.click(this.btnProjectMenu);
    }
}