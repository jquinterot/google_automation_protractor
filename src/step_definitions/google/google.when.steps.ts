import { When } from 'cucumber';
import { GoogleHomePage, GoogleResultPage } from '../../pages';
import * as chai from 'chai';

let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

When('I type {string} into the search field', async function typeTextInToGoogleLabel(textToSearch: string) {
    const googleHomePage = new GoogleHomePage();
    await googleHomePage.getGoogleLabel(textToSearch);
});

When('I click the Google Search button', async function clickGoogleSearchButton() {
    const googleHomePage = new GoogleHomePage();
    await googleHomePage.clickGoogleSearchButton();
});

When('I click on the first result link', async function clickOnFirstResult() {
    const googleResultPage = new GoogleResultPage();
    await googleResultPage.clickFirstResultFromList();
});

When('the suggestions list is displayed', async function isSuggestionsListDisplayed() {
    const googleHomePage = new GoogleHomePage();
    const recomendationsList = await googleHomePage.getSuggestionsList();
    expect(recomendationsList).to.not.be.null;
    
});

When('I click on the first suggestion in the list', async function clickonTheFirstSuggestion() {
    const googleHomePage = new GoogleHomePage();
    await googleHomePage.selectFirstSuggestion();
});

When('I click on the valid result link', async function clickOnFirstResult() {
    const googleResultPage = new GoogleResultPage();
    await googleResultPage.validLinkToClick();
});

