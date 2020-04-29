import { by, browser, element, protractor, ElementFinder } from 'protractor';
var {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);

export const baseGoogleUrl = 'https://www.google.com/';
export class BasePage {
    
    public writeText(selector :ElementFinder, text:string) {
        selector.click();
        selector.sendKeys(text);
    }
}