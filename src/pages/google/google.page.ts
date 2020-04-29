import { by, browser, element, protractor } from 'protractor';
import { BasePage, baseGoogleUrl } from '../base/base-page';

export class GoogleHomePage extends BasePage {

    private googleHomeLabel = element.all(by.css('input.gLFyf.gsfi')).first();   
    private clickOut = element(by.css('span.Q8LRLc'));
    private googleSearchButton = element(by.css('.FPdoLc.tfB0Bf input.gNO89b'));
    private googleResultLabel = element(by.css('input.gLFyf.gsfi'));
    private recomendationGoogleList = element.all(by.css('ul > li.sbct .sbl1'));
    private firstSuggestion = element.all(by.css('li .sbtc .sbl1 span'));     

    public async getGoogleLabel(textToSearch: string){
        const basePage = new BasePage();
        basePage.writeText(await this.googleHomeLabel , textToSearch);
    }

    public async openGoogleHomePage(){
        // Get url from any site different to Angular page
        browser.waitForAngularEnabled(false);
        await browser.driver.get(baseGoogleUrl);
    }

    public async clickGoogleSearchButton(){
       await browser.sleep(3000);
       await this.clickOut.click();
       await this.googleSearchButton.click();
    }

    public async checkPage(){
        return await this.googleResultLabel.getText();
    }

    public async getFirstSuggestionFromList(){     
        let resultArrayListText = [];
        await browser.sleep(3000);  
        const getElementsFromList = await this.recomendationGoogleList;
        for (const iterator of getElementsFromList) {
            var textFromList = await iterator.getText();
            var resultList = {
                text: textFromList
            }
            resultArrayListText.push(resultList.text);
        }
        console.log(resultArrayListText[0]);
        return resultArrayListText[0];
    }

    public async selectFirstSuggestion(){
        await browser.sleep(3000);  
        const getElementsFromList = await this.firstSuggestion;
        await getElementsFromList[0].click();
    }
}