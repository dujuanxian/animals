import { AnimalsPage } from './app.po';

describe('animals App', () => {
  let page: AnimalsPage;

  beforeEach(() => {
    page = new AnimalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
