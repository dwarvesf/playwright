/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type pages = typeof import('./src/main/pages/PageController');
type testData = typeof import('./src/main/resources/test_data/test_data');
type configuration = typeof import('./src/main/resources/configuration');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginAs: any, pages: pages, testData: testData, configuration: configuration }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
