import Locator = CodeceptJS.Locator;
import BasePage from './BasePage';
const { I } = inject()

export default class ProjectsPage extends BasePage {
    I: CodeceptJS.I;

    constructor(I: CodeceptJS.I) {
        super('/projects');
        this.I = I;
    }

    // Locator Definition
    private lblProjectHeader: Locator = locate({ css: '.ant-typography' }).as('Project Header label');
    private lblProjectName: Locator = locate('.styled[href="/projects/fortress"]').as('Project Name label');
    private txtSearchProject: Locator = locate({ xpath: '//input[@placeholder="Search projects"]' }).as('Project Search textfield');  

    // Method definition
    waitForOpened(): ProjectsPage {
        super.waitForOpened();
        return this;
    }

    then_searchProjectAndVerifyResult() {
        I.clearAndFillField(this.txtSearchProject, "Not exist project");
        I.see("No Data");
        I.clearAndFillField(this.txtSearchProject, "Fortress");
        I.see("Fortress", this.lblProjectName);
    }
    
    and_clickOnCreateNewProject() {
        I.click("Add Project");
    }

    then_seeTheProjectName() {
        I.see("Projects", this.lblProjectHeader);
    }
}