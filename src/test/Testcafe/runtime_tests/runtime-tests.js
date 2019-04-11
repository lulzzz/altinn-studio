import App from '../app';
import { Selector, t } from 'testcafe';
import CommonPage from '../page-objects/common';
import DashBoard from '../page-objects/DashboardPage';
import LoginPage from '../page-objects/loginPage';
import RunTimePage from '../page-objects/runTimePage';
import DesignerPage from '../page-objects/designerPage';
import TestData from '../TestData';

let app = new App();
let dash = new DashBoard();
let loginPage = new LoginPage();
let common = new CommonPage();
let runtime = new RunTimePage();
let designer = new DesignerPage();
let runtimeUser = new TestData('AutoTest', 'automatictestaltinn@brreg.no', 'test123', 'basic');


fixture('Regression tests of services in runtime')
  .page(app.baseUrl)
  .beforeEach(async t => {
    //Testdata and other testing context
    t.ctx.serviceName = "runtime_autotest";
    await common.login(runtimeUser.userEmail, runtimeUser.password, loginPage);
  })

test('Instantiate a service in runtime', async () => {
    await t
      .navigateTo(app.baseUrl + 'designer/AutoTest/runtime_auto_test#/aboutservice')
      .click(designer.testeNavigationTab)
      .hover(designer.leftDrawerMenu)
      .click(designer.testeLeftMenuItems[0])
      .click(runtime.openManualTestWindow)
      .click(runtime.testUsers[0])
      .click(runtime.startNewButton)
});