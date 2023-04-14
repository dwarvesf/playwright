const { I, testData } = inject();

const lblDashboardH3 = { css: '.ant-typography' }

class DashboardPage {
    then_verifyDashboardDisplays() {
        I.see('Dashboard', lblDashboardH3)
    }
}

module.exports = new DashboardPage()