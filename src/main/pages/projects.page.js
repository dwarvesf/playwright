const { I, testData } = inject();

const searchProjectBox = { css: '.ant-input' }
const projecFortressName = { css: '.styled[href="/projects/fortress"]'}

const lblTitleProject = { css: '.ant-typography' }

const projectName = { css: '#name' }
const status = { css: '#status' }
const country = '#countryID'
const accountManagers = '#accountManagers_0_employeeID'
const deliveryManagers = '#deliveryManagers_0_employeeID'
const projectEmail = '#projectEmail'
const clientEmail = '#clientEmail_0'
const projectType = '#type'
const projectFunction = '#function'
const developmentProjectFunction = '.ant-select-item.ant-select-item-option.ant-select-item-option-active[title="Development"]'
const submitBtn = 'button[type="submit"]'

const name = 'AUTO PROJECT ' + I.randomString(5, 'aA');

class ProjectsPage {
    then_searchProject() {
        I.click(searchProjectBox)
        I.fillField(searchProjectBox, 'Not exist project')
        I.see('No Data')
        I.click(searchProjectBox)
        I.clearField(searchProjectBox)
        I.fillField(searchProjectBox, 'Fortress')
        I.see('Fortress', projecFortressName)
    }
    

    then_clickOnCreateNewProject() {
        I.click('Add Project')
    }
}

class NewProjectPage extends ProjectsPage {
    
    and_createNewProject() {
        super.then_clickOnCreateNewProject()
        I.see('New project', lblTitleProject)
        I.clearAndFillField(projectName, name)
        I.clearAndFillField(status, 'Active')
        I.clearAndFillField(country, 'Vietnam')
        I.clearAndFillField(accountManagers, 'Automation QA')
        I.clearAndFillField(deliveryManagers, 'Automation QA')
        I.clearAndFillField(projectEmail, 'autotest@email.com')
        I.clearAndFillField(clientEmail, 'autoclient_email@email.com')
        I.clearAndFillField(projectType, 'Dwarves')
        I.click(projectFunction)
        I.click(developmentProjectFunction)
        I.click(submitBtn)
    }

    then_verifyCreateNewProjectSuccess() {
        I.waitForText(name)
        I.see(name)
    }

    and_clickOnExistProject() {
        I.click(name)
    }

    then_verifyProjectDetails() {
        I.see(name, lblTitleProject)
    }
}

module.exports = new ProjectsPage()
module.exports = new NewProjectPage()

