/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type pages = typeof import('./src/main/pages/pages_import.js');
type testData = typeof import('./src/main/resources/test_data/test_data.js');
type configuration = typeof import('./src/main/resources/configuration.js');
type Utils = import('./src/main/helpers/utils_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginAs: any, pages: pages, testData: testData, configuration: configuration }
  interface Methods extends Playwright, Utils {}
  interface I extends ReturnType<steps_file>, WithTranslation<Utils> {}
  namespace Translation {
    interface Actions {}
  }
}
