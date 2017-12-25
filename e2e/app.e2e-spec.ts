import { Page } from './app.po';
import { async, fakeAsync, tick } from '@angular/core/testing';



describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

   describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/#/about/insurancelist');
    });

	it('should have a title saying Page One', async(() => {
   //service.someAsyncTask();
   page.getTitle().then(title => {
		  
        expect(title).toEqual('Insurance list');
      }); 
	  
   //tick();
   //expect(...)
})); 

  /*
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Page One', () => {
      page.getTitle().then(title => {
		  console.log(title);
        expect(title).toEqual('Page One');
      });
    }); */
  })
});
