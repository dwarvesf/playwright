import Pages from '../main/pages/PageController';
const { I, loginAs } = inject();

Feature("Projects management Fortress site").tag("@projects");

const pages = new Pages(I);

Before(async () => {
  await loginAs("dfQA");
})

Scenario("Verify Projects Page Displayed", async () => {
  pages.getDashboardPage().then_canSeeDashboardHeaderDisplays();
});

Scenario("Search Project", async () => {
  pages.getDashboardPage().then_canSeeDashboardHeaderDisplays();
  pages.getDashboardPage().and_clickOnProjectsMenu();
  pages.getProjectPage().then_seeTheProjectName();
}).tag("@searchProject");

Scenario("Create New Project", async () => {
  pages.getDashboardPage().then_canSeeDashboardHeaderDisplays();
  pages.getDashboardPage().and_clickOnProjectsMenu();
  pages.getProjectPage().and_clickOnCreateNewProject();
  pages.getNewProjectPage().then_seeTheNewProjectPage();
  pages.getNewProjectPage().and_createNewProject();
  pages.getNewProjectPage().then_verifyProjectDetails();
}).tag("@createNew");
