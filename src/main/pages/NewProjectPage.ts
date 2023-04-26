import BasePage from './BasePage';
import Locator = CodeceptJS.Locator;
const { I } = inject()

const name:string = 'AUTO PROJECT ' + I.randomString(5, 'aA');

export default class NewProjectPage extends BasePage {
    I: CodeceptJS.I;

    constructor(I: CodeceptJS.I) {
        super('/projects/new');
        this.I = I;
    }

    // Locator Definition
    private lblTitleProject: Locator = locate({ css: '.ant-typography' }).as('Project Title label');

    private txtProjectName: Locator = locate('#name').as('Project Name textfield');
    private txtStatus: Locator = locate('#status').as('Status textfield');
    private txtCountry: Locator = locate('#countryID').as('Country textfield');
    private txtAccountManagers: Locator = locate('#accountManagers_0_employeeID').as('Account Managers textfield');
    private txtDeliveryManagers: Locator = locate('#deliveryManagers_0_employeeID').as('Delivery Managers textfield');
    private txtProjectEmail: Locator = locate('#projectEmail').as('Project Email textfield');
    private txtClientEmail: Locator = locate('#clientEmail_0').as('Client Email textfield');
    private txtProjectType: Locator = locate('#type').as('Project Type textfield');

    private btnProjectFunction: Locator = locate('#function').as('Project Function button');
    private btnDevProjFunction: Locator = locate('.ant-select-item.ant-select-item-option.ant-select-item-option-active[title="Development"]').as('Development Project Function button');
    private btnSubmit: Locator = locate('button[type="submit"]').as('Submit button');

    // Method definition
    waitForOpened(): NewProjectPage {
        super.waitForOpened();
        return this;
    }

    then_seeTheNewProjectPage() {
        I.see("New project", this.lblTitleProject);
    }

    and_createNewProject() {
        this.fillField
        this.fillField(this.txtProjectName, name);
        this.fillField(this.txtStatus, 'Active');
        this.fillField(this.txtCountry, 'Vietnam');
        this.fillField(this.txtAccountManagers, 'Automation QA');
        this.fillField(this.txtDeliveryManagers, 'Automation QA');
        this.fillField(this.txtProjectEmail, 'autotest@email.com');
        this.fillField(this.txtClientEmail, 'autoclient_email@email.com');
        this.fillField(this.txtProjectType, 'Dwarves');
        I.click(this.btnProjectFunction);
        I.click(this.btnDevProjFunction);
        I.click(this.btnSubmit);
      }

    then_verifyCreateNewProjectSuccess() {
        I.waitForText(name);
        I.see(name);
    }
    
    and_clickOnExistProject() {
        I.click(name);
    }
    
    then_verifyProjectDetails() {
        I.see(name, this.lblTitleProject);
    }
}