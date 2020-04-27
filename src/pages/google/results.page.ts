import { by, browser, element, protractor, promise } from 'protractor';
import { BasePage, baseGoogleUrl } from '../base/base-page';

export class GoogleResultPage extends BasePage {
    private resultListForSearchedText = element(by.css('#rso > div:nth-child(2) > div > div.r > a > h3'));
    private firstResultLink = element(by.css('#rso div:nth-child(2) > div.g .rc .r > a'));
    private pageAccessed = element(by.css('head > title'));
    private validList = element(by.css('#rso > div:nth-child(12) > div > div.r > a > h3'));
    private validResultLink = element(by.css('#rso > div:nth-child(12) > div > div.r > a'));

    public async getFirstResultFromList(){
        browser.sleep(2000);
        const firstResultText = await this.resultListForSearchedText.getText();
        return firstResultText;
    }
    
    public async clickFirstResultFromList():Promise <void> {
        await this.firstResultLink.click();
    }  

    public async getTittleFromAccesedPage():Promise <string> {
        browser.sleep(2000);
        const resultText=  await browser.getTitle();
        return resultText;
    }  

    public async validResultToCheck(){
        browser.sleep(2000);
       
        await browser.executeScript('window.scrollTo(0,740);');
            browser.sleep(3000);
            const resultText= this.validList.getText();
           
            return await resultText;
    } 

    public async validLinkToClick():Promise <void> {
        browser.sleep(3000);
        await this.validResultLink.click();
    }  
}