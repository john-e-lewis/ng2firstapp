import { Ng2firstappPage } from './app.po';

describe('ng2firstapp App', function() {
  let page: Ng2firstappPage;

  beforeEach(() => {
    page = new Ng2firstappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
