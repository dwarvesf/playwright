const { I } = inject();

const searchProjectBox = { xpath: '//input[@placeholder="Search projects"]' };
const projectFortressName = { css: '.styled[href="/projects/fortress"]' };

export default class ProjectsPage {
  then_searchProjectAndVerifyResult() {
    I.clearAndFillField(searchProjectBox, "Not exist project");
    I.see("No Data");
    I.clearAndFillField(searchProjectBox, "Fortress");
    I.see("Fortress", projectFortressName);
  }

  and_clickOnCreateNewProject() {
    I.click("Add Project");
  }
}
