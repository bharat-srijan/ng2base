import { WallsrijanPage } from './app.po';

describe('wallsrijan App', function() {
  let page: WallsrijanPage;

  beforeEach(() => {
    page = new WallsrijanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
