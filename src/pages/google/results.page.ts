import { by, browser, element, protractor, promise, WebElement } from 'protractor';
import { BasePage } from '../base/base-page';

export class GoogleResultPage extends BasePage {
    private resultListForSearchedText = element.all(by.css('.LC20lb'));
    private firstResultLink = element(by.css('.rc div.r  > a'));
    private validResultLink = element(by.css('#rso > div:nth-child(12) > div > div.r > a'));

    public async getFirstResultFromList(){ 
        await browser.sleep(3000);        
        let resultArrayListText = [];
        await browser.sleep(3000);  
        const getElementsFromList = await this.resultListForSearchedText;
        for (const iterator of getElementsFromList) {
            var textFromList = await iterator.getText();
            var resultList = {
                text: textFromList
            }
            resultArrayListText.push(resultList.text);
        }
        return resultArrayListText[0];
    }
    
    public async clickFirstResultFromList():Promise <void> {
        await browser.sleep(3000);  
        const getFirstElementToClickFromList = await this.firstResultLink;
        await getFirstElementToClickFromList[0].click();
    }  

    public async getTittleFromAccesedPage():Promise <string> {
        const resultText = await browser.getTitle();
        return resultText;
    }  

    public async validResultToCheck(){
        await browser.executeScript('window.scrollTo(0,740);');    
        let resultArrayListText = [];
        await browser.sleep(3000);  
        const getElementsFromList = await this.resultListForSearchedText;
        for (const iterator of getElementsFromList) {
            var textFromList = await iterator.getText();
            var resultList = {
                text: textFromList
            }
            resultArrayListText.push(resultList.text);
        }
        return await resultArrayListText[4];
    } 

    public async validLinkToClick():Promise <void> {
        await this.validResultLink.click();
    }  
}