const { pages, loginAs } = inject();
Feature("Login Fortress and see Dashboard");

Scenario("Login", async () => {
  await loginAs("dfQA");
  pages.dashboardPage.then_verifyDashboardPageDisplays();
});
