import { Ng2SemanticUiDemoPage } from './app.po';

describe('ng2-semantic-ui-demo App', () => {
  let page: Ng2SemanticUiDemoPage;

  beforeEach(() => {
    page = new Ng2SemanticUiDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
