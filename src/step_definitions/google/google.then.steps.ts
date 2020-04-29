import { Then } from 'cucumber';
import { GoogleHomePage } from '../../pages';
import { GoogleResultPage } from '../../pages';
import * as chai from 'chai';

let expect = chai.expect;

Then('I go to the search results page', async function goToGoogleResult() {
    const googleHomePage = new GoogleHomePage();
    const labelResultText = await googleHomePage.checkPage();
    expect(labelResultText).to.not.be.null;
});

Then('the first result is {string}', async function checkFirstResult(textToCompare: string) {
    const googleResultPage = new GoogleResultPage();
    const resultList = await googleResultPage.getFirstResultFromList();
    expect(resultList).to.be.equal(textToCompare, 'The first result is not equal');
});

Then('I go to the {string} page', async function checkPageName(pageName: string) {
    const googleResultPage = new GoogleResultPage();
    const pageAccesed = await googleResultPage.getTittleFromAccesedPage();
    expect(pageAccesed).to.be.equal(pageName, 'The first result is not equal');
});


Then('the first result is {string} book', async function checkHappyResult(textToCompare: string) {
    const googleResultPage = new GoogleResultPage();
    const resultList = await googleResultPage.validResultToCheck();
    expect(resultList).to.be.equal(textToCompare, 'The first result is not equal');
});

