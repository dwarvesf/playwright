import Pages from '../main/pages/PageController';
const { I, loginAs } = inject();

Feature("Login Fortress and see Dashboard");

const pages = new Pages(I);

Scenario("Login", async () => {
  await loginAs("dfQA");
  pages.getDashboardPage().then_canSeeDashboardHeaderDisplays();
}).tag('@login');

After(async ({I}) => {
  await I.say("Test ended");
})
