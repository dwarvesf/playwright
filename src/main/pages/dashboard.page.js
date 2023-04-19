const { I, testData } = inject();

const lblDashboardH3 = { css: '.ant-typography' }

const menuProjects = '.ant-menu-title-content > [href $= "projects"]'
const lblProjectH3 = { css: '.ant-typography' }

class DashboardPage {
    then_verifyDashboardDisplays() {
        I.see('Dashboard', lblDashboardH3)
    }

    then_openAndVerifyProjectsPageDisplays() {
        I.click(menuProjects)
        I.see('Projects', lblProjectH3)
    }
}

module.exports = new DashboardPage()