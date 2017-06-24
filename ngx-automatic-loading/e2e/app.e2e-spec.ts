import { NgxAutomaticLoadingPage } from './app.po';

describe('ngx-automatic-loading App', () => {
  let page: NgxAutomaticLoadingPage;

  beforeEach(() => {
    page = new NgxAutomaticLoadingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
