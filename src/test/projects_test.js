const { pages, loginAs } = inject()
Feature('Projects management Fortress site').tag('@projects')

Scenario('Verify Projects Page Displayed', async () => {
    await loginAs('dfQA')
    pages.dashboardPage.then_openAndVerifyProjectsPageDisplays()
});

Scenario('Search Project', async () => {
    await loginAs('dfQA')
    pages.dashboardPage.then_openAndVerifyProjectsPageDisplays()
    pages.projectsPage.then_searchProjectAndVerifyResult()
}).tag('@searchProject');

Scenario('Create New Project', async () => {
    await loginAs('dfQA')
    pages.dashboardPage.then_openAndVerifyProjectsPageDisplays()
    pages.projectsPage.and_createNewProject()
    pages.projectsPage.then_verifyCreateNewProjectSuccess()
    pages.projectsPage.and_clickOnExistProject()
    pages.projectsPage.then_verifyProjectDetails()
}).tag('@createNew');