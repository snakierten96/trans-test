import { TransTestPage } from './app.po';

describe('trans-test App', function() {
  let page: TransTestPage;

  beforeEach(() => {
    page = new TransTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
