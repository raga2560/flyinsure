import { browser, element, by, ElementFinder } from 'protractor';
import { SelectModulePageObject } from './select-module.page-object';
 
export class ModulePageObject {
 
  selectPage: SelectModulePageObject = new SelectModulePageObject();
 
  constructor(){
 
  }
 
  getLessonList() {
    return element.all(by.css('.lesson-list button'));
  }
 
  browseToPage(){
 
    browser.get('');
 
    this.selectPage.getModuleElement().click();
 
    browser.driver.sleep(500);
 
  }
 
}